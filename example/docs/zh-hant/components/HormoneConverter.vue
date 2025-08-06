<script setup>
import { ref, watch } from 'vue'
import { logoToast } from '../composables/logoToast'

const amountUnits = ['pg', 'ng', 'μg', 'mg', 'g']
const molUnits = ['pmol', 'nmol', 'μmol', 'mmol', 'mol']
const iuUnits = ['IU', 'mIU']
const volumeUnits = ['mL', 'dL', 'L']

const hormones = [
  { key: 'E2', label: 'E2' },
  { key: 'T', label: 'T' },
  { key: 'P4', label: 'P4' },
  { key: 'FSH', label: 'FSH' },
  { key: 'LH', label: 'LH' },
  { key: 'PRL', label: 'PRL' },
]

const massToGramMap = {
  pg: 1e-12, ng: 1e-9, μg: 1e-6, mg: 1e-3, g: 1
}

const volumeToLiterMap = {
  mL: 1e-3, dL: 1e-1, L: 1
}

const molToMolMap = {
  pmol: 1e-12, nmol: 1e-9, μmol: 1e-6, mmol: 1e-3, mol: 1
}

const iuToIUMap = {
  IU: 1,
  mIU: 1e-3
}

const hormoneMolarMass = {
  E2: 272.38,
  T: 288.43,
  P4: 314.47,
  FSH: 35500,
  LH: 30000,
  PRL: 23000
}

const hormoneIUtoMassUg = {
  FSH: 0.0725,
  LH: 0.04656,
  PRL: 47.2
}

const conversions = ref(
  hormones.map(h => ({
    key: h.key,
    value: '',
    fromNumerator: 'pg',
    fromDenominator: 'mL',
    toNumerator: 'pmol',
    toDenominator: 'L',
    result: '',
  }))
)

const isMass = unit => unit in massToGramMap
const isMol  = unit => unit in molToMolMap
const isIU   = unit => unit in iuToIUMap

watch(conversions, (newVal) => {
  for (const conv of newVal) {
    const key = conv.key
    const input = parseFloat(conv.value)
    if (isNaN(input)) {
      conv.result = ''
      continue
    }

    const fromVol = volumeToLiterMap[conv.fromDenominator]
    const toVol = volumeToLiterMap[conv.toDenominator]

    let gramPerLiter = NaN

    //输入质量
    if (isMass(conv.fromNumerator)) {
      const grams = input * massToGramMap[conv.fromNumerator]
      gramPerLiter = grams / fromVol
    }

    else if (isMol(conv.fromNumerator) && key in hormoneMolarMass) {
      const mol = input * molToMolMap[conv.fromNumerator]
      const molPerL = mol / fromVol
      gramPerLiter = molPerL * hormoneMolarMass[key]
    }

    else if (isIU(conv.fromNumerator) && key in hormoneIUtoMassUg) {
      const iu = input * iuToIUMap[conv.fromNumerator]
      const ug = iu * hormoneIUtoMassUg[key]
      const grams = ug * 1e-6
      gramPerLiter = grams / fromVol
    }

    // to mol/l
    let molPerLiter = NaN
    if (key in hormoneMolarMass) {
      molPerLiter = gramPerLiter / hormoneMolarMass[key]
    }

    let output = NaN

    //output
    if (isMass(conv.toNumerator)) {
      const grams = gramPerLiter * toVol
      output = grams / massToGramMap[conv.toNumerator]
    }

    else if (isMol(conv.toNumerator) && !isNaN(molPerLiter)) {
      const mol = molPerLiter * toVol
      output = mol / molToMolMap[conv.toNumerator]
    }

    else if (isIU(conv.toNumerator) && key in hormoneIUtoMassUg) {
      const ug = gramPerLiter * 1e6 * toVol
      const iu = ug / hormoneIUtoMassUg[key]
      output = iu / iuToIUMap[conv.toNumerator]
    }

    conv.result = isFinite(output) ? output.toFixed(4) : ''
  }
}, { deep: true })

function copyToClipboard(value) {
  if (!value) return

  const temp = document.createElement('textarea')
  temp.value = value
  temp.setAttribute('readonly', '')
  temp.style.position = 'absolute'
  temp.style.left = '-9999px'
  document.body.appendChild(temp)
  temp.select()

  const success = document.execCommand('copy')
  document.body.removeChild(temp)

  logoToast(success ? '📋 已成功複製到剪貼簿' : '❌ 複製失敗，請手動複製', 2000)
}
</script>

<template>
  <div class="vp-doc-hormone-grid">
    <div class="hormone-labels">
      <div v-for="(h, index) in hormones" :key="h.key" class="hormone-label">
        <input
          class="vp-input hormone-label-input"
          :value="h.label"
          readonly
          tabindex="-1"
        />
      </div>
    </div>

    <div class="hormone-scrollable-rows">
      <div v-for="(h, index) in hormones" :key="h.key" class="hormone-row">

        <input
          type="number"
          class="vp-input value-input"
          placeholder="原始數值"
          v-model="conversions[index].value"
        />

        <select
          class="vp-select unit-select"
          v-model="conversions[index].fromNumerator"
        >
          <optgroup label="質量單位">
            <option v-for="u in amountUnits" :key="u">{{ u }}</option>
          </optgroup>
          <optgroup label="莫耳單位">
            <option v-for="u in molUnits" :key="u">{{ u }}</option>
          </optgroup>
          <optgroup label="國際單位 IU" v-if="!(h.key === 'E2' || h.key === 'T' || h.key === 'P4')">
            <option v-for="u in iuUnits" :key="u">{{ u }}</option>
          </optgroup>
        </select>

        <span class="separator">/</span>

        <select
          class="vp-select volume-select"
          v-model="conversions[index].fromDenominator"
        >
          <option v-for="u in volumeUnits" :key="u">{{ u }}</option>
        </select>

        <span class="separator">➡</span>

        <div
          class="vp-input value-input result-copy"
          @click="copyToClipboard(conversions[index].result)"
        >
          {{ conversions[index].result || '\u00A0' }}
        </div>

        <select
          class="vp-select unit-select"
          v-model="conversions[index].toNumerator"
        >
          <optgroup label="質量單位">
            <option v-for="u in amountUnits" :key="u">{{ u }}</option>
          </optgroup>
          <optgroup label="莫耳單位">
            <option v-for="u in molUnits" :key="u">{{ u }}</option>
          </optgroup>
          <optgroup label="國際單位 IU" v-if="!(h.key === 'E2' || h.key === 'T' || h.key === 'P4')">
            <option v-for="u in iuUnits" :key="u">{{ u }}</option>
          </optgroup>
        </select>

        <span class="separator">/</span>

        <select
          class="vp-select volume-select"
          v-model="conversions[index].toDenominator"
        >
          <option v-for="u in volumeUnits" :key="u">{{ u }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style>
.vp-doc-hormone-grid {
  display: flex;
  align-items: flex-start;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.hormone-labels {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.25rem 0;
  flex-shrink: 0;
}

.hormone-label-input {
  width: 3.5rem;
  border: none;
  background: none;
  font-weight: bold;
  text-align: left;
  cursor: default;
  pointer-events: none;
  appearance: none;
  box-shadow: none;
}

.hormone-scrollable-rows {
  overflow-x: auto;
  scrollbar-width: none;
}

.hormone-scrollable-rows::-webkit-scrollbar {
  display: none;
}

.hormone-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0;
  min-width: 40rem;
}

.vp-input.value-input {
  width: 7rem;
}
.vp-select.unit-select {
  width: 5.5rem;
}
.vp-select.volume-select {
  width: 4.5rem;
}
.result-copy {
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.separator {
  text-align: center;
}
</style>