---
title: 单位科普
index: false
author: Hormone.wiki
order: 0
category:
  - Docs
---

## 激素常用单位

激素六项（女性/男性基础性激素检测）常见的化验项目和常用单位如下：

| 项目 | 中文名称 | 常用单位 |
|------|----------|----------|
| E2 | 雌二醇（Estradiol） | **pg/mL** 或 pmol/L |
| P | 黄体酮（Progesterone） | **ng/mL** 或 nmol/L |
| T | 睾酮（Testosterone） | **ng/dL**、**ng/mL**（少见）、或 nmol/L |
| PRL | 泌乳素（Prolactin） | **ng/mL** 或 mIU/L |
| FSH | 促卵泡生成素（Follicle Stimulating Hormone） | **mIU/mL** 或 IU/L |
| LH | 促黄体生成素（Luteinizing Hormone） | **mIU/mL** 或 IU/L |

## 激素单位换算

以下是常见单位间的换算关系:

- 雌二醇 (E2)：1 pg/mL ≈ 3.67 pmol/L[^1]
- 黄体酮 (P)：1 ng/mL ≈ 3.18 nmol/L[^2]
- 睾酮 (T)：1 ng/dL ≈ 0.0347 nmol/L[^3]
- 泌乳素 (PRL)：1 ng/mL ≈ 0.04348 nmol/L (≈ 21.2 mIU/L)[^4]  
- FSH：1 mIU/mL = 1 IU/L[^5]  
- LH：1 mIU/mL = 1 IU/L[^6]  

## 关于本站 [激素转换器](../../tools/hormone-converter) 

本站 [激素转换器](../../tools/hormone-converter) 使用以下映射集

::: details 映射集
##### 质量 → 克（`massToGramMap`）
| 单位 | 对应克 (g) |
|---|---:|
| pg | 1e-12[^7] |
| ng | 1e-9[^7] |
| μg | 1e-6[^7] |
| mg | 1e-3[^7] |
| g  | 1[^7] |

##### 体积 → 升（`volumeToLiterMap`）
| 单位 | 对应升 (L) |
|---|---:|
| mL | 1e-3[^7] |
| dL | 1e-1[^7] |
| L  | 1[^7] |

##### 物质的量 → 摩尔（`molToMolMap`）
| 单位 | 对应摩尔 (mol) |
|---|---:|
| pmol | 1e-12[^7] |
| nmol | 1e-9[^7] |
| μmol | 1e-6[^7] |
| mmol | 1e-3[^7] |
| mol  | 1[^7] |

##### 生物活性单位 → IU（`iuToIUMap`）
| 单位 | 对应 IU |
|---|---:|
| IU  | 1[^7] |
| mIU | 1e-3[^7] |

##### 激素摩尔质量（`hormoneMolarMass`；单位：g/mol）
| 激素 | 数值 |
|---|---:|
| E2 | 272.38[^8] |
| T  | 288.43[^9] |
| P4 | 314.47[^10] |
| FSH | 35500[^11] |
| LH  | 30000[^12] |
| PRL | 23000[^13] |

##### IU ↔ 质量（`hormoneIUtoMassUg`；单位：μg/IU）
| 激素 | 数值 |
|---|---:|
| FSH | 0.0725[^14] |
| LH  | 0.04656[^15] |
| PRL | 47.2[^16] |
:::

实现任意单位间的自由换算，原理请见
- **人教版小学数学四年级下册**
  - 第 4 单元 “小数与单位换算”
- **人教版高中化学必修一**
  - 第二章 海水中的重要元素——钠和氯
    - 第三节 物质的量
    - 实验活动1 配制一定物质的量浓度的溶液

具体逻辑详见[Github](https://github.com/INP146/Hormone-wiki/blob/main/example/docs/zh-hans/components/HormoneConverter.vue)


## SI单位
::: details 折叠内容
### 定义
**SI**（International System of Units, SI）是全球通用的计量单位体系，由 BIPM/CGPM/CIPM 管理与更新。2019 年的“新 SI”以**固定 7 个自然常数的精确数值**来定义全部单位，保证溯源统一、长期稳定，并与过去量值连续。[^33][^34][^36] 

### 七个基本单位与“常数定义”
下表只给直观要点：**每个基本单位都通过固定某个（或某些）常数的“精确数值”来定义**；数值本身在 SI 中是“定值”。[^33][^34] 

| 基本单位 | 符号 | 通过固定的常数（示意） |
|---|---|---|
| 秒 | s | 铯-133 基态超精细跃迁频率 $Δν\_Cs$ |
| 米 | m | 光速 $\(c\)$ |
| 千克 | kg | 普朗克常数 $\(h\)$ |
| 安培 | A | 基本电荷 $\(e\)$ |
| 开尔文 | K | 玻尔兹曼常数 $\(k_B\)$ |
| 摩尔 | mol | 阿伏伽德罗常数 $\(N_A\)$ |
| 坎德拉 | cd | 540 THz 单色辐射的**光效** $\(K_{cd}=683\ \mathrm{lm/W}\)$ |

> 这些常数的精确数值由 CODATA 推荐值锁定，是 2019 年改革的核心。[^36] 

### 导出单位与“相干性”
**导出单位**由基本单位按量纲组合而成；**相干（coherent）**意味着不需要额外数值因子。常见有：  
**N（牛顿）= kg·m·s⁻²**、**Pa（帕）= N·m⁻²**、**J（焦耳）= N·m**、**W（瓦）= J·s⁻¹**、**C（库仑）= A·s**、**V（伏）= W·A⁻¹**、**Ω（欧）= V·A⁻¹**、**F、S、Wb、T、H、lm、lx、Bq、Gy、Sv、kat** 等；平面角 **rad** 与立体角 **sr** 为无量纲导出单位。[^33][^35][^38] 

### SI 前缀（十进制倍数）
**前缀 + 单位**表示十进制倍数，如 **k**m、m**s**、μ**L**。  
- 2022 年新增四个前缀以覆盖极端数量级：
  ronna $10^{27}$、quetta $10^{30}$、ronto $10^{-27}$、quecto $10^{-30}$。[^39][^40]
- 不可**连用前缀**（写 μm，不写 mkm）。前缀与单位符号之间**不留空格**。[^37] 

### 书写与排版
- **数值与单位符号之间留空格**：写 *5 mL*、*20 kg*（角度的 °、′、″ 例外）。  
- **单位符号不加复数**：*20 kg*（不是 *20 kgs*）。  
- **小数分组/点**遵循出版规范；公式中量的数值与单位可写作 ${x}\ \mathrm{unit}$。[^37] 

### 非 SI 但获准与 SI 共用的单位（摘）
为兼顾习惯用法，CIPM 认可少数**非 SI 单位**可与 SI 共用，如：**min（分）/h（时）/d（日）**、**L（升）**、**t（吨）**、**eV（电子伏）**、**° / ′ / ″（角度）**、**Da（道尔顿）**、**Np（奈培）/B（贝尔）**、**au（天文单位）** 等（完整清单见表格）。[^41] 
:::

## 国际单位IU

### 定义
- **IU**（International Unit）是按**生物活性/效应**来计量某种物质的单位，不是按质量或摩尔数。它用来保证不同批次、不同厂家或不同测定方法得到的“效应强度”可以对得上。IU 不是 SI 单位。[^17][^18]  
- **世界卫生组织**（WHO）建立相应物质的**国际标准品（International Standard, IS）**，通过多实验室协作研究给这批标准品**指定一个 IU 的数值**；后续各自都拿自己的样品去和这个标准比活性。[^19]

### 什么时候会用到 IU
- **维生素**（A、D、E）常见用 IU 标示历史原因多；  
- **生物制品**（如激素、酶、凝血因子、抗体/疫苗、病毒核酸定量等）用 IU 是因为活性不能仅靠化学分析完全刻画。[^20]

### IU 的“浓度单位”怎么写
- 常见写法：**IU/L、IU/mL、mIU/L、kIU/L**。前缀和 SI 一样：  
  - 1 **m**IU/L = 10⁻³ IU/L  
  - 1 **k**IU/L = 10³ IU/L  
  - **1 μIU/mL = 1 mIU/L**（因为 1 mL = 10⁻³ L）。

### 和 SI 单位能不能互相换算？
- **一般不能通用换算**：IU 的大小是“这**一种物质**”相对某个 WHO 标准品的活性，**不同物质的 IU 彼此没有等价关系**，也不必然能换成质量或摩尔数。[^21]
- **少数明确可换**：对某些维生素，监管/营养学已给出**固定对照**（因为这些维生素可以制得等效纯品并统一效价），如下表。[^22]

#### 常见换算/用法速查
::: details 折叠内容
| 类别 | 你会看到的单位 | 换算或说明 |
|---|---|---|
| **维生素 D**（D₂/D₃） | IU 或 **μg** | **1 IU = 0.025 μg**；600 IU = 15 μg。[^23] |
| **维生素 A** | IU、**μg RAE** | 以 RAE 为准：**1 IU 视黄醇 = 0.3 μg RAE**；**1 IU 膳食 β-胡萝卜素 = 0.05 μg RAE**；**1 IU 补充剂 β-胡萝卜素 = 0.3 μg RAE**。[^24] |
| **维生素 E（α-生育酚）** | IU 或 **mg α-生育酚** | 天然型：**1 IU = 0.67 mg**；合成型：**1 IU = 0.45 mg**。[^25] |
| **促性腺激素等多肽激素**（如 **FSH/LH/TSH**） | **(m)IU/L** | IU 由 WHO 标准定义，**通常没有可靠的质量/摩尔换算**；不同分析方法间以 IU/L 保证可比性。[^17][^19] |
| **催乳素 PRL（特例示例）** | mIU/L 或 ng/mL | 常见（方法相关）换算：**ng/mL × 21.2 ≈ mIU/L**；此系数源于**WHO 第三国际标准 IS 84/500** 校准，具体试剂可能在 **21.1–21.2** 附近。请以化验单方法说明为准。[^26][^27][^28] |
| **病毒载量**（如 HCV RNA） | **IU/mL** | 用 IU/mL
使不同实验室/试剂的核酸定量可比；WHO 定期发布 HCV RNA 国际标准以**协同校准**并评估**实验室间可比性**。[^29][^30][^31] |
:::

### 为什么有时必须用 IU
- 对很多**生物制品**，“活性”受结构异质性、糖基化、折叠/聚集、制备工艺等影响，同一质量并不代表同一生物效应；用 IU 才能保证“**效应相同 => IU 相同**”。[^32]

**这就是为什么泌乳素(PRL）的常用单位既包括质量浓度也包括IU浓度，而FSH/LH只能用IU浓度**

- **PRL（泌乳素）**
  - 化学形态：**单链蛋白**，约 199 aa、23 kDa，有3对二硫键稳定折叠；主分泌形式是非糖基化的，只有少量存在糖基化，但临床可用方法剔除干扰（如 PEG 去宏泌乳素）。这些变体对总体** “比活性” **的影响相对有限。 
  - 因为分子组成单一、**分子量相对固定**，活性主要取决于这条链是否正确折叠并能结合受体——所以“每微克里大概有多少个能干活的分子”是**相对稳定**的，质量浓度与活性单位就能建立相对稳的换算关系（这才使得后来标准化成为可能），临床也就既能报 ng/mL，也能报 mIU/L。

- **FSH/LH（促卵泡/促黄体激素）**
  - 化学形态：都是**异源二聚体糖蛋白**（共同 α 亚基 + 特异 β 亚基），每个亚基带 N-糖基化位点；糖链不仅“占不占位”（宏异质性）在变，糖链的长度、分枝、唾液酸/硫酸化程度（微异质性）也在变，糖占总质量 20–30%，而且随生理周期、年龄、细胞状态而变。 
  - 直接后果：这些糖链同时改变分子量、等电点、受体亲和力、信号偏向性与体内半衰期——例如低糖型清除更快，高唾液酸型半衰期更长但即刻受体活性可能更低；不同“糖型”的比活性差异可达数倍，**同样质量的 FSH/LH，活性不一定相同**。
  - 质量不再代表有生物效应的量（甚至两个批次的“同分子量”FSH，比活性也可能不同）。因此必须用 IU（按生物效应定量）来对齐“生物效应量”，而不是给出一个通用的“1 IU = 114514 μg”。历史上的 FSH/LH IU 就是靠生物测定（如 Steelman–Pohley 增重法）锚定的；后来许多研究也证明免疫反应量 ≠ 生物活性量，再次说明“质量<->活性”不可简单互换。 

::: info Summary
- PRL：单链、结构相对单纯 -> 质量与活性更“成比例”，所以质量浓度与 IU 都能用
- FSH/LH：二聚体糖蛋白，糖基化导致分子量与活性严重脱钩 -> 只能用 IU 表达“生物效应量”，没有普适的质量换算。 
:::


[^1]: 实验室 SI 单位转换表，Estradiol pg/mL → pmol/L = 3.67（[endmemo](https://www.endmemo.com/medical/unitconvert/Estradiol.php)，[labcorp](https://www.labcorp.com/test-menu/resources/si-unit-conversion-table)）  
[^2]: Progesterone ng/mL → nmol/L = 3.18（[questdiagnostics](https://www.questdiagnostics.com/content/dam/corporate/restricted/documents/test-center/si_units/si_units.pdf)）  
[^3]: Testosterone ng/dL → nmol/L = 0.0347（[labcorp](https://www.labcorp.com/test-menu/resources/si-unit-conversion-table)）  
[^4]: Prolactin ng/mL → nmol/L = 0.04348（≈ 21.2 mIU/L）（[Monobind](https://445858.app.netsuite.com/core/media/media.nl?_xt=.pdf&c=445858&h=cbba57359bacf2e4b686&id=712969)）  
[^5]: FSH mIU/mL = IU/L（[labcorp](https://www.labcorp.com/test-menu/resources/si-unit-conversion-table)）  
[^6]: LH mIU/mL = IU/L（[questdiagnostics](https://www.questdiagnostics.com/content/dam/corporate/restricted/documents/test-center/si_units/si_units.pdf)）  

[^7]: **SI 前缀与单位换算**（milli=10⁻³、micro=10⁻⁶、deci=10⁻¹ 等），适用于质量、体积与物质的量：BIPM “SI prefixes”与 NIST 资料。   
[^8]: **雌二醇（E2）摩尔质量 272.38 g/mol**：Sigma-Aldrich 与维基条目均列出 272.38。   
[^9]: **睾酮（T）摩尔质量 288.43 g/mol**：ChEMBL 与 SpectraBase。   
[^10]: **孕酮（P4）摩尔质量 314.47 g/mol**：FDA/ DailyMed 药品说明书与 SpectraBase。   
[^11]: **FSH 分子量 ≈35,500 Da**：多家检测试剂书一致给出“approximate molecular mass of 35,500 daltons”。   
[^12]: **LH 分子量 ≈30,000 Da（≈30 kDa）**：多家检测试剂资料。   
[^13]: **PRL 主型单体约 23 kDa**：UniProt 与综述/教材。   
[^14]: **FSH 1 IU ≈ 0.0725 μg**：日本 PMDA 公布的 FE 999049（follitropin delta）审评资料在表格中明确给出 *Conversion factor = 0.0725 μg/IU*。   
[^15]: **LH 1 IU ≈ 0.04656 μg**：NIBSC 国际标准 96/602 背景 + 维基医学条目明确给出该折算值（由该标准安瓿的单位与蛋白质量推导）。   
[^16]: **PRL 1 IU ≈ 47.2 μg**：WHO 第三国际标准 **84/500** 说明书载明“每安瓿 53 mIU & 约 2.5 μg”，据此换算得 47.2 μg/IU；临床实验室资料亦常用 21.2 mIU/μg 的等效因子（与之相容）。 

[^17]: NIBSC. *International standards.* https://nibsc.org/standardisation/international_standards.aspx  
[^18]: WHO. *Providing international biological reference preparations.* https://www.who.int/activities/providing-international-biological-reference-preparations  
[^19]: Wikipedia. *International unit.* https://en.wikipedia.org/wiki/International_unit  
[^20]: 同上；以及 NIBSC 说明：IU 用于生物制品效价统一。https://nibsc.org/standardisation/international_reference_reagents.aspx  
[^21]: Wikipedia. *International unit*（IU 非 SI，且不同物质间不可互换）。https://en.wikipedia.org/wiki/International_unit  
[^22]: NIH ODS 各维生素事实表（A/D/E）对 IU 与质量单位的换算说明。https://ods.od.nih.gov/  
[^23]: NIH ODS. *Vitamin D — Health Professional Fact Sheet.*（**1 μg = 40 IU**）。https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/  
[^24]: NIH ODS. *Vitamin A — Health Professional Fact Sheet.*（IU→μg RAE 换算）。https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/  
[^25]: NIH ODS. *Vitamin E — Health Professional Fact Sheet.*（天然/合成 α-生育酚 IU↔mg）。https://ods.od.nih.gov/factsheets/VitaminE-HealthProfessional/  
[^26]: Roche. *Elecsys Prolactin II* IFU（**ng/mL × 21.2 = mIU/L**）。https://labogids.sintmaria.be/sites/default/files/prolactin_ii_2024-02_v12.pdf  
[^27]: Beltran L, *Clinical Chemistry* 2008（不同平台 21.2 与 27.0 的换算背景）。https://citeseerx.ist.psu.edu/document?doi=0561436862ced0b2cb87418b0c636727e4bf8924  
[^28]: NIBSC. *WHO International Standard Prolactin 84/500* IFU. https://nibsc.org/documents/ifu/84-500.pdf  
[^29]: NIBSC. *6th WHO International Standard for HCV RNA*（IU/mL 标定与多实验室协作）。https://nibsc.org/documents/ifu/18-184.pdf  
[^30]: WHO ECBS 报告：6th HCV IS 实验室间**0.11–0.28 log10 IU/mL** 变异度，整体已较好**协调一致**。https://www.who.int/publications/m/item/WHO-BS-2019.2358  
[^31]: U.S. Dept. of Veterans Affairs. *Hepatitis C Viral Load / HCV RNA quantitative testing*（报告示例以 IU/L 计）。https://www.hepatitis.va.gov/hcv/patient/diagnosis/labtests-RNA-quantitative-testing.asp  
[^32]: NIBSC. *International reference reagents*（建立 IS 后以 IU 表示效价，保障“同效应同数值”）。https://nibsc.org/standardisation/international_reference_reagents.aspx

[^33]: BIPM《SI 手册》（第 9 版）：SI 的正式定义、相干单位与表格。  
[^34]: NIST SP 330（2019 版）：与 SI 手册一致的权威英文指南。  
[^35]: BIPM《A concise summary of the SI》：导出单位专名的简明总表。  
[^36]: CODATA 2018 推荐常数：为 2019 改革固定常数提供一致数值。  
[^37]: NIST *Guide to the SI* 第 6/7 章：前缀与单位书写规则。  
[^38]: NIST 关于“相干导出单位”的解释与示例。  
[^39]: CGPM 第 27 届（2022）第 3 号决议：新增 **ronna/quetta/ronto/quecto**。  
[^40]: BIPM 前缀总表：现有 **24** 个 SI 前缀。  
[^41]: NIST SP 330 第 4 节（表 8）：**可与 SI 共用**的非 SI 单位清单。