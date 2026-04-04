export type TemplateCategory = 'personal' | 'business' | 'government'

export interface DocumentTemplate {
  id: string
  titleKey: string
  descKey: string
  category: TemplateCategory
  content: {
    en: string
    ru: string
    kz: string
  }
}

export const templates: DocumentTemplate[] = [
  // Personal Documents
  {
    id: 'leave-request',
    titleKey: 'leaveRequest',
    descKey: 'leaveRequestDesc',
    category: 'personal',
    content: {
      en: `To: Director of [Company Name]
[Director's Full Name]
From: [Your Full Name]
Position: [Your Position]
Date: [Date]

LEAVE REQUEST

I kindly request you to grant me annual paid leave from [Start Date] to [End Date] for a total of [Number] calendar days.

During my absence, my duties will be performed by [Colleague Name], [Position].

Reason for leave: [Annual leave / Family circumstances / Personal reasons]

Attachments: [List any supporting documents if applicable]

Sincerely,
[Your Full Name]
[Signature]`,
      ru: `Директору [Название компании]
[ФИО директора]
от [Ваше ФИО]
должность: [Ваша должность]
Дата: [Дата]

ЗАЯВЛЕНИЕ

Прошу предоставить мне ежегодный оплачиваемый отпуск с [Дата начала] по [Дата окончания] на [Количество] календарных дней.

На время моего отсутствия исполнение моих обязанностей возлагается на [ФИО коллеги], [должность].

Причина отпуска: [Очередной отпуск / Семейные обстоятельства / Личные причины]

Приложения: [Перечень прилагаемых документов при наличии]

С уважением,
[Ваше ФИО]
[Подпись]`,
      kz: `[Компания атауы] директорына
[Директордың аты-жөні]
[Сіздің аты-жөніңіз]
лауазымы: [Сіздің лауазымыңыз]
Күні: [Күні]

ӨТІНІШ

Маған [Басталу күні] бастап [Аяқталу күні] дейін [Саны] күнтізбелік күнге жыл сайынғы ақылы демалыс беруіңізді сұраймын.

Мен жоқ кезде менің міндеттерімді [Әріптесіңіздің аты-жөні], [лауазымы] атқарады.

Демалыс себебі: [Кезекті демалыс / Отбасылық жағдайлар / Жеке себептер]

Қосымшалар: [Бар болса, қоса берілетін құжаттар тізімі]

Құрметпен,
[Сіздің аты-жөніңіз]
[Қолы]`
    }
  },
  {
    id: 'power-of-attorney',
    titleKey: 'powerOfAttorney',
    descKey: 'powerOfAttorneyDesc',
    category: 'personal',
    content: {
      en: `POWER OF ATTORNEY

I, [Full Name], born on [Date of Birth], residing at [Full Address], holder of ID/Passport number [Document Number] issued by [Issuing Authority] on [Issue Date],

hereby authorize

[Representative Full Name], born on [Date of Birth], residing at [Full Address], holder of ID/Passport number [Document Number] issued by [Issuing Authority] on [Issue Date],

to act on my behalf and in my name in the following matters:
[Describe the specific powers being granted]

This Power of Attorney is valid from [Start Date] until [End Date].

The representative [is / is not] authorized to delegate these powers to third parties.

Date: [Date]
Place: [City, Country]

_______________________
[Principal's Full Name]
[Signature]

Notarized by: [Notary Name]
Registration Number: [Number]
Date: [Date]`,
      ru: `ДОВЕРЕННОСТЬ

Я, [ФИО полностью], [дата рождения], проживающий(ая) по адресу: [Полный адрес], паспорт серии [Серия] № [Номер], выдан [Кем выдан] [Дата выдачи],

настоящей доверенностью уполномочиваю

[ФИО представителя], [дата рождения], проживающего(ую) по адресу: [Полный адрес], паспорт серии [Серия] № [Номер], выдан [Кем выдан] [Дата выдачи],

представлять мои интересы и действовать от моего имени в следующих вопросах:
[Опишите конкретные полномочия]

Настоящая доверенность выдана сроком с [Дата начала] по [Дата окончания].

Представитель [имеет / не имеет] право передоверия данных полномочий третьим лицам.

Дата: [Дата]
Место: [Город, Страна]

_______________________
[ФИО доверителя]
[Подпись]

Удостоверено нотариусом: [ФИО нотариуса]
Регистрационный номер: [Номер]
Дата: [Дата]`,
      kz: `СЕНІМХАТ

Мен, [Аты-жөні толық], [Туған күні], мекенжайы: [Толық мекенжай], жеке куәлік/төлқұжат № [Құжат нөмірі], [Берген орган] [Берілген күні] берген,

осы сенімхатпен

[Өкілдің аты-жөні], [Туған күні], мекенжайы: [Толық мекенжай], жеке куәлік/төлқұжат № [Құжат нөмірі], [Берген орган] [Берілген күні] берген тұлғаға

менің атымнан және мүддемді білдіріп келесі мәселелерде әрекет етуге өкілеттік беремін:
[Берілетін нақты өкілеттіктерді сипаттаңыз]

Бұл сенімхат [Басталу күні] бастап [Аяқталу күні] дейін жарамды.

Өкіл бұл өкілеттіктерді үшінші тұлғаларға тапсыруға [құқылы / құқылы емес].

Күні: [Күні]
Орны: [Қала, Ел]

_______________________
[Сенім білдірушінің аты-жөні]
[Қолы]

Нотариус куәландырды: [Нотариустың аты-жөні]
Тіркеу нөмірі: [Нөмір]
Күні: [Күні]`
    }
  },
  {
    id: 'receipt',
    titleKey: 'receipt',
    descKey: 'receiptDesc',
    category: 'personal',
    content: {
      en: `RECEIPT

I, [Full Name], born on [Date of Birth], residing at [Full Address], holder of ID/Passport number [Document Number],

hereby confirm that I have received from

[Payer's Full Name], born on [Date of Birth], residing at [Full Address], holder of ID/Passport number [Document Number],

the amount of [Amount in numbers] ([Amount in words]) [Currency]

for: [Purpose/Reason for payment]

The funds have been received in full. I have no claims against the payer.

Date: [Date]
Place: [City]

_______________________
[Recipient's Full Name]
[Signature]

Witnesses (if applicable):
1. [Witness Name], [Signature]
2. [Witness Name], [Signature]`,
      ru: `РАСПИСКА

Я, [ФИО полностью], [дата рождения], проживающий(ая) по адресу: [Полный адрес], паспорт № [Номер документа],

настоящим подтверждаю, что получил(а) от

[ФИО плательщика], [дата рождения], проживающего(ей) по адресу: [Полный адрес], паспорт № [Номер документа],

денежную сумму в размере [Сумма цифрами] ([Сумма прописью]) [Валюта]

за: [Цель/Основание платежа]

Денежные средства получены в полном объёме. Претензий к плательщику не имею.

Дата: [Дата]
Место: [Город]

_______________________
[ФИО получателя]
[Подпись]

Свидетели (при наличии):
1. [ФИО свидетеля], [Подпись]
2. [ФИО свидетеля], [Подпись]`,
      kz: `ҚОЛХАТ

Мен, [Аты-жөні толық], [Туған күні], мекенжайы: [Толық мекенжай], жеке куәлік № [Құжат нөмірі],

осымен

[Төлеушінің аты-жөні], [Туған күні], мекенжайы: [Толық мекенжай], жеке куәлік № [Құжат нөмірі] тұлғасынан

[Сома сандармен] ([Сома жазумен]) [Валюта] ақша сомасын

[Төлем мақсаты/негізі] үшін алғанымды растаймын.

Ақша қаражаты толық көлемде алынды. Төлеушіге ешқандай наразылығым жоқ.

Күні: [Күні]
Орны: [Қала]

_______________________
[Алушының аты-жөні]
[Қолы]

Куәгерлер (бар болса):
1. [Куәгердің аты-жөні], [Қолы]
2. [Куәгердің аты-жөні], [Қолы]`
    }
  },
  {
    id: 'complaint',
    titleKey: 'complaint',
    descKey: 'complaintDesc',
    category: 'personal',
    content: {
      en: `To: [Organization Name]
[Address]
From: [Your Full Name]
Address: [Your Address]
Phone: [Your Phone]
Email: [Your Email]

COMPLAINT

I, [Your Full Name], am writing to file a formal complaint regarding [Brief description of the issue].

Details of the incident:
Date: [Date of incident]
Location: [Location where incident occurred]
Persons involved: [Names of employees/persons involved]

Description of events:
[Detailed description of what happened, in chronological order]

Previous attempts to resolve:
[List any previous communications or attempts to resolve the issue]

Supporting documents attached:
1. [Document 1]
2. [Document 2]

I request the following actions:
1. [Specific action requested]
2. [Compensation/remedy if applicable]

Please respond to this complaint within [Number] business days as required by law.

Date: [Date]

_______________________
[Your Full Name]
[Signature]`,
      ru: `Кому: [Название организации]
[Адрес]
От: [Ваше ФИО]
Адрес: [Ваш адрес]
Телефон: [Ваш телефон]
Email: [Ваш email]

ЖАЛОБА

Я, [Ваше ФИО], обращаюсь с официальной жалобой по поводу [Краткое описание проблемы].

Детали инцидента:
Дата: [Дата происшествия]
Место: [Место происшествия]
Лица, причастные к инциденту: [Имена сотрудников/лиц]

Описание событий:
[Подробное описание произошедшего в хронологическом порядке]

Предыдущие попытки решения:
[Перечислите предыдущие обращения или попытки решить вопрос]

Прилагаемые документы:
1. [Документ 1]
2. [Документ 2]

Прошу принять следующие меры:
1. [Конкретное действие]
2. [Компенсация/возмещение при необходимости]

Прошу предоставить ответ на данную жалобу в течение [Количество] рабочих дней в соответствии с законодательством.

Дата: [Дата]

_______________________
[Ваше ФИО]
[Подпись]`,
      kz: `Кімге: [Ұйым атауы]
[Мекенжай]
Кімнен: [Сіздің аты-жөніңіз]
Мекенжай: [Сіздің мекенжайыңыз]
Телефон: [Сіздің телефоныңыз]
Email: [Сіздің email-іңіз]

ШАҒЫМ

Мен, [Сіздің аты-жөніңіз], [Мәселенің қысқаша сипаттамасы] бойынша ресми шағыммен жүгінемін.

Оқиға мәліметтері:
Күні: [Оқиға күні]
Орны: [Оқиға орны]
Қатысы бар тұлғалар: [Қызметкерлердің/тұлғалардың есімдері]

Оқиғалар сипаттамасы:
[Не болғанын хронологиялық тәртіппен толық сипаттау]

Алдыңғы шешу әрекеттері:
[Бұрынғы өтініштерді немесе мәселені шешу әрекеттерін тізімдеңіз]

Қоса берілген құжаттар:
1. [Құжат 1]
2. [Құжат 2]

Келесі шараларды қабылдауды сұраймын:
1. [Нақты әрекет]
2. [Өтемақы/түзету қажет болса]

Осы шағымға заңнамаға сәйкес [Саны] жұмыс күні ішінде жауап беруіңізді сұраймын.

Күні: [Күні]

_______________________
[Сіздің аты-жөніңіз]
[Қолы]`
    }
  },
  {
    id: 'police-report',
    titleKey: 'policeReport',
    descKey: 'policeReportDesc',
    category: 'personal',
    content: {
      en: `To: Chief of [Police Department/Precinct Name]
[Address]
From: [Your Full Name]
Date of Birth: [Date]
Address: [Your Address]
Phone: [Your Phone]
ID Number: [ID/Passport Number]

STATEMENT

I, [Your Full Name], hereby report the following incident:

Date and time of incident: [Date, Time]
Location: [Exact address/location]

Description of incident:
[Detailed description of what happened]

Persons involved/Suspects (if known):
[Names, descriptions, or any identifying information]

Witnesses (if any):
Name: [Witness Name]
Contact: [Witness Phone/Address]

Evidence:
[List any physical evidence, documents, photos, videos]

Damage/Loss:
[Description of any damage or loss, estimated value]

I request that this matter be investigated and appropriate action be taken.

I confirm that all information provided is true and accurate. I am aware of the responsibility for providing false information.

Date: [Date]

_______________________
[Your Full Name]
[Signature]`,
      ru: `Начальнику [Название отделения полиции]
[Адрес]
от [Ваше ФИО]
Дата рождения: [Дата]
Адрес: [Ваш адрес]
Телефон: [Ваш телефон]
ИИН/Паспорт: [Номер документа]

ЗАЯВЛЕНИЕ

Я, [Ваше ФИО], сообщаю о следующем происшествии:

Дата и время происшествия: [Дата, Время]
Место: [Точный адрес/место]

Описание происшествия:
[Подробное описание случившегося]

Причастные лица/Подозреваемые (если известны):
[Имена, описания, любые идентифицирующие данные]

Свидетели (при наличии):
ФИО: [ФИО свидетеля]
Контакт: [Телефон/Адрес свидетеля]

Доказательства:
[Перечислите вещественные доказательства, документы, фото, видео]

Ущерб/Потери:
[Описание ущерба или потерь, примерная стоимость]

Прошу провести проверку по данному факту и принять соответствующие меры.

Подтверждаю, что вся предоставленная информация является достоверной. Об ответственности за заведомо ложные показания предупреждён(а).

Дата: [Дата]

_______________________
[Ваше ФИО]
[Подпись]`,
      kz: `[Полиция бөлімшесінің атауы] бастығына
[Мекенжай]
[Сіздің аты-жөніңіз]
Туған күні: [Күні]
Мекенжай: [Сіздің мекенжайыңыз]
Телефон: [Сіздің телефоныңыз]
ЖСН/Төлқұжат: [Құжат нөмірі]

АРЫЗ

Мен, [Сіздің аты-жөніңіз], келесі оқиға туралы хабарлаймын:

Оқиға күні мен уақыты: [Күні, Уақыты]
Орны: [Нақты мекенжай/орын]

Оқиға сипаттамасы:
[Болған жағдайдың толық сипаттамасы]

Қатысы бар тұлғалар/Күдіктілер (белгілі болса):
[Есімдері, сипаттамалары, кез келген анықтау деректері]

Куәгерлер (бар болса):
Аты-жөні: [Куәгердің аты-жөні]
Байланыс: [Куәгердің телефоны/мекенжайы]

Дәлелдер:
[Заттай дәлелдерді, құжаттарды, фото, видеоны тізімдеңіз]

Зиян/Жоғалтулар:
[Зиян немесе жоғалтулардың сипаттамасы, шамамен құны]

Осы факт бойынша тексеру жүргізіп, тиісті шаралар қабылдауыңызды сұраймын.

Берілген барлық ақпараттың дұрыс екенін растаймын. Әдейі жалған мәліметтер үшін жауапкершілік туралы ескертілдім.

Күні: [Күні]

_______________________
[Сіздің аты-жөніңіз]
[Қолы]`
    }
  },
  // Business Documents
  {
    id: 'commercial-offer',
    titleKey: 'commercialOffer',
    descKey: 'commercialOfferDesc',
    category: 'business',
    content: {
      en: `[Your Company Name]
[Your Company Address]
[Phone] | [Email] | [Website]

Date: [Date]

To: [Recipient Company Name]
Attn: [Contact Person Name]
[Recipient Address]

COMMERCIAL PROPOSAL

Dear [Contact Person Name],

We are pleased to present our commercial proposal for [Product/Service Name].

About Our Company:
[Brief company introduction]

Proposed Products/Services:

| Item | Description | Unit Price | Quantity | Total |
|------|-------------|------------|----------|-------|
| [Item 1] | [Description] | [Price] | [Qty] | [Total] |
| [Item 2] | [Description] | [Price] | [Qty] | [Total] |

Total Amount: [Total] [Currency]

Terms and Conditions:
- Payment terms: [Payment terms]
- Delivery time: [Delivery period]
- Warranty: [Warranty period]
- Validity of offer: [Validity period]

Why Choose Us:
- [Advantage 1]
- [Advantage 2]
- [Advantage 3]

We would be happy to discuss this proposal and answer any questions.

Best regards,

[Your Name]
[Position]
[Your Company Name]
[Phone] | [Email]`,
      ru: `[Название вашей компании]
[Адрес вашей компании]
[Телефон] | [Email] | [Сайт]

Дата: [Дата]

Кому: [Название компании-получателя]
Вниманию: [ФИО контактного лица]
[Адрес получателя]

КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ

Уважаемый(ая) [ФИО контактного лица],

Рады представить вам коммерческое предложение на [Название продукта/услуги].

О нашей компании:
[Краткое представление компании]

Предлагаемые товары/услуги:

| Наименование | Описание | Цена за ед. | Кол-во | Сумма |
|--------------|----------|-------------|--------|-------|
| [Товар 1] | [Описание] | [Цена] | [Кол-во] | [Сумма] |
| [Товар 2] | [Описание] | [Цена] | [Кол-во] | [Сумма] |

Итого: [Сумма] [Валюта]

Условия:
- Условия оплаты: [Условия оплаты]
- Срок поставки: [Срок поставки]
- Гарантия: [Срок гарантии]
- Срок действия предложения: [Срок действия]

Почему стоит выбрать нас:
- [Преимущество 1]
- [Преимущество 2]
- [Преимущество 3]

Будем рады обсудить данное предложение и ответить на все вопросы.

С уважением,

[Ваше имя]
[Должность]
[Название вашей компании]
[Телефон] | [Email]`,
      kz: `[Сіздің компания атауы]
[Сіздің компания мекенжайы]
[Телефон] | [Email] | [Сайт]

Күні: [Күні]

Кімге: [Алушы компания атауы]
Назарына: [Байланыс тұлғасының аты-жөні]
[Алушының мекенжайы]

КОММЕРЦИЯЛЫҚ ҰСЫНЫС

Құрметті [Байланыс тұлғасының аты-жөні],

Сізге [Өнім/қызмет атауы] бойынша коммерциялық ұсынысымызды ұсынуға қуаныштымыз.

Біздің компания туралы:
[Компанияның қысқаша таныстырылымы]

Ұсынылатын тауарлар/қызметтер:

| Атауы | Сипаттамасы | Бір. бағасы | Саны | Сомасы |
|-------|-------------|-------------|------|--------|
| [Тауар 1] | [Сипаттама] | [Баға] | [Саны] | [Сома] |
| [Тауар 2] | [Сипаттама] | [Баға] | [Саны] | [Сома] |

Барлығы: [Сома] [Валюта]

Шарттар:
- Төлем шарттары: [Төлем шарттары]
- Жеткізу мерзімі: [Жеткізу мерзімі]
- Кепілдік: [Кепілдік мерзімі]
- Ұсыныстың жарамдылық мерзімі: [Жарамдылық мерзімі]

Неге бізді таңдау керек:
- [Артықшылық 1]
- [Артықшылық 2]
- [Артықшылық 3]

Осы ұсынысты талқылап, барлық сұрақтарға жауап беруге қуаныштымыз.

Құрметпен,

[Сіздің атыңыз]
[Лауазымыңыз]
[Сіздің компания атауы]
[Телефон] | [Email]`
    }
  },
  {
    id: 'business-letter',
    titleKey: 'businessLetter',
    descKey: 'businessLetterDesc',
    category: 'business',
    content: {
      en: `[Your Company Letterhead]
[Company Name]
[Address]
[Phone] | [Email]

Date: [Date]
Reference: [Reference Number]

To: [Recipient Name]
[Recipient Position]
[Company Name]
[Address]

Subject: [Subject of the Letter]

Dear [Recipient Name],

[Opening paragraph - State the purpose of your letter]

[Body paragraphs - Provide details, supporting information, or requests]

[Closing paragraph - Summarize and state any required actions]

Please do not hesitate to contact me if you have any questions or require additional information.

Sincerely,

[Your Name]
[Your Position]
[Company Name]

Enclosures: [List any attachments]
CC: [Names of anyone receiving a copy]`,
      ru: `[Бланк вашей компании]
[Название компании]
[Адрес]
[Телефон] | [Email]

Дата: [Дата]
Исх. №: [Номер документа]

Кому: [ФИО получателя]
[Должность получателя]
[Название компании]
[Адрес]

Тема: [Тема письма]

Уважаемый(ая) [ФИО получателя],

[Вступительный абзац - укажите цель письма]

[Основные абзацы - предоставьте детали, подтверждающую информацию или запросы]

[Заключительный абзац - подведите итог и укажите необходимые действия]

Если у вас возникнут вопросы или потребуется дополнительная информация, пожалуйста, свяжитесь со мной.

С уважением,

[Ваше имя]
[Ваша должность]
[Название компании]

Приложения: [Перечислите вложения]
Копия: [Имена получателей копии]`,
      kz: `[Сіздің компанияның бланкі]
[Компания атауы]
[Мекенжай]
[Телефон] | [Email]

Күні: [Күні]
Шығ. №: [Құжат нөмірі]

Кімге: [Алушының аты-жөні]
[Алушының лауазымы]
[Компания атауы]
[Мекенжай]

Тақырыбы: [Хаттың тақырыбы]

Құрметті [Алушының аты-жөні],

[Кіріспе абзац - хаттың мақсатын көрсетіңіз]

[Негізгі абзацтар - мәліметтерді, растайтын ақпаратты немесе сұрауларды беріңіз]

[Қорытынды абзац - қорытындылаңыз және қажетті әрекеттерді көрсетіңіз]

Сұрақтарыңыз болса немесе қосымша ақпарат қажет болса, маған хабарласуыңызды сұраймын.

Құрметпен,

[Сіздің атыңыз]
[Сіздің лауазымыңыз]
[Компания атауы]

Қосымшалар: [Тіркемелерді тізімдеңіз]
Көшірме: [Көшірме алушылардың есімдері]`
    }
  },
  {
    id: 'internal-memo',
    titleKey: 'internalMemo',
    descKey: 'internalMemoDesc',
    category: 'business',
    content: {
      en: `INTERNAL MEMORANDUM

To: [Recipient Name/Department]
From: [Your Name], [Your Position]
Date: [Date]
Subject: [Subject of Memo]

Purpose:
[Briefly state the purpose of this memo]

Background:
[Provide relevant background information]

Key Points:
1. [Point 1]
2. [Point 2]
3. [Point 3]

Recommendation/Action Required:
[State what action is needed and by when]

Attachments:
[List any supporting documents]

Please contact me at [extension/email] if you have any questions.

[Your Name]
[Position]
[Department]`,
      ru: `СЛУЖЕБНАЯ ЗАПИСКА

Кому: [ФИО получателя/Отдел]
От: [Ваше ФИО], [Ваша должность]
Дата: [Дата]
Тема: [Тема записки]

Цель:
[Кратко изложите цель данной записки]

Предыстория:
[Предоставьте необходимую информацию]

Основные моменты:
1. [Пункт 1]
2. [Пункт 2]
3. [Пункт 3]

Рекомендация/Требуемые действия:
[Укажите, какие действия необходимы и в какие сроки]

Приложения:
[Перечислите подтверждающие документы]

При возникновении вопросов свяжитесь со мной по [внутренний номер/email].

[Ваше ФИО]
[Должность]
[Отдел]`,
      kz: `ҚЫЗМЕТТІК ЖАЗБА

Кімге: [Алушының аты-жөні/Бөлім]
Кімнен: [Сіздің аты-жөніңіз], [Сіздің лауазымыңыз]
Күні: [Күні]
Тақырыбы: [Жазба тақырыбы]

Мақсаты:
[Осы жазбаның мақсатын қысқаша жазыңыз]

Алғы шарттар:
[Қажетті ақпаратты беріңіз]

Негізгі сәттер:
1. [Тармақ 1]
2. [Тармақ 2]
3. [Тармақ 3]

Ұсыныс/Қажетті әрекеттер:
[Қандай әрекеттер қажет екенін және қашанға дейін екенін көрсетіңіз]

Қосымшалар:
[Растайтын құжаттарды тізімдеңіз]

Сұрақтарыңыз болса, маған [ішкі нөмір/email] арқылы хабарласыңыз.

[Сіздің аты-жөніңіз]
[Лауазым]
[Бөлім]`
    }
  },
  {
    id: 'acceptance-cert',
    titleKey: 'acceptanceCert',
    descKey: 'acceptanceCertDesc',
    category: 'business',
    content: {
      en: `ACCEPTANCE CERTIFICATE

Certificate No.: [Number]
Date: [Date]
Location: [City]

Parties:

SUPPLIER:
[Company Name], represented by [Name], [Position], acting on the basis of [Charter/Power of Attorney]

RECIPIENT:
[Company Name], represented by [Name], [Position], acting on the basis of [Charter/Power of Attorney]

Pursuant to Contract No. [Contract Number] dated [Contract Date], the Supplier has delivered and the Recipient has accepted the following:

| No. | Description | Unit | Quantity | Unit Price | Total |
|-----|-------------|------|----------|------------|-------|
| 1 | [Item] | [Unit] | [Qty] | [Price] | [Total] |
| 2 | [Item] | [Unit] | [Qty] | [Price] | [Total] |

Total Amount: [Total] [Currency]
VAT ([%]%): [VAT Amount]
Total with VAT: [Grand Total]

Quality: [Meets requirements / With remarks]
Remarks (if any): [Description of any defects or issues]

The goods/services have been accepted in full / with remarks specified above.

SUPPLIER:                           RECIPIENT:

[Company Name]                      [Company Name]
[Signature]                         [Signature]
[Name]                              [Name]
[Position]                          [Position]
Seal                                Seal`,
      ru: `АКТ ПРИЁМА-ПЕРЕДАЧИ

Акт №: [Номер]
Дата: [Дата]
Место: [Город]

Стороны:

ПОСТАВЩИК:
[Название компании], в лице [ФИО], [Должность], действующего на основании [Устава/Доверенности]

ПОЛУЧАТЕЛЬ:
[Название компании], в лице [ФИО], [Должность], действующего на основании [Устава/Доверенности]

В соответствии с Договором № [Номер договора] от [Дата договора] Поставщик передал, а Получатель принял следующее:

| № | Наименование | Ед. изм. | Кол-во | Цена за ед. | Сумма |
|---|--------------|----------|--------|-------------|-------|
| 1 | [Товар] | [Ед.] | [Кол-во] | [Цена] | [Сумма] |
| 2 | [Товар] | [Ед.] | [Кол-во] | [Цена] | [Сумма] |

Итого: [Сумма] [Валюта]
НДС ([%]%): [Сумма НДС]
Всего с НДС: [Итого]

Качество: [Соответствует требованиям / С замечаниями]
Замечания (при наличии): [Описание дефектов или проблем]

Товары/услуги приняты в полном объёме / с замечаниями, указанными выше.

ПОСТАВЩИК:                          ПОЛУЧАТЕЛЬ:

[Название компании]                 [Название компании]
[Подпись]                           [Подпись]
[ФИО]                               [ФИО]
[Должность]                         [Должность]
М.П.                                М.П.`,
      kz: `ҚАБЫЛДАУ-ТАПСЫРУ АКТІСІ

Акт №: [Нөмір]
Күні: [Күні]
Орны: [Қала]

Тараптар:

ЖЕТКІЗУШІ:
[Компания атауы], [Жарғы/Сенімхат] негізінде әрекет ететін [Лауазым] [Аты-жөні] атынан

АЛУШЫ:
[Компания атауы], [Жарғы/Сенімхат] негізінде әрекет ететін [Лауазым] [Аты-жөні] атынан

[Шарт күні] күнгі № [Шарт нөмірі] Шартқа сәйкес Жеткізуші тапсырды, ал Алушы келесіні қабылдады:

| № | Атауы | Өлш. бір. | Саны | Бір. бағасы | Сомасы |
|---|-------|-----------|------|-------------|--------|
| 1 | [Тауар] | [Өлш.] | [Саны] | [Баға] | [Сома] |
| 2 | [Тауар] | [Өлш.] | [Саны] | [Баға] | [Сома] |

Барлығы: [Сома] [Валюта]
ҚҚС ([%]%): [ҚҚС сомасы]
ҚҚС-пен барлығы: [Жиыны]

Сапасы: [Талаптарға сай / Ескертулермен]
Ескертулер (бар болса): [Ақаулар немесе мәселелердің сипаттамасы]

Тауарлар/қызметтер толық көлемде қабылданды / жоғарыда көрсетілген ескертулермен.

ЖЕТКІЗУШІ:                          АЛУШЫ:

[Компания атауы]                    [Компания атауы]
[Қолы]                              [Қолы]
[Аты-жөні]                          [Аты-жөні]
[Лауазымы]                          [Лауазымы]
М.О.                                М.О.`
    }
  },
  // Government Documents
  {
    id: 'gov-application',
    titleKey: 'govApplication',
    descKey: 'govApplicationDesc',
    category: 'government',
    content: {
      en: `To: [Head of Government Agency]
[Agency Name]
[Address]

From: [Your Full Name]
IIN: [Individual Identification Number]
Address: [Your Address]
Phone: [Your Phone]
Email: [Your Email]

APPLICATION

I, [Your Full Name], hereby apply for [specific service/permission/document].

Personal Information:
- Full Name: [Full Name]
- Date of Birth: [Date]
- Place of Birth: [Place]
- Citizenship: [Citizenship]
- ID Document: [Type], Number [Number], issued [Date] by [Authority]

Purpose of Application:
[Describe what you are applying for and why]

Supporting Documents Attached:
1. Copy of ID document
2. [Document 2]
3. [Document 3]

I confirm that all information provided is accurate and complete.

Date: [Date]

_______________________
[Your Full Name]
[Signature]`,
      ru: `Кому: [Руководитель государственного органа]
[Название органа]
[Адрес]

От: [Ваше ФИО]
ИИН: [Индивидуальный идентификационный номер]
Адрес: [Ваш адрес]
Телефон: [Ваш телефон]
Email: [Ваш email]

ЗАЯВЛЕНИЕ

Я, [Ваше ФИО], прошу [конкретная услуга/разрешение/документ].

Личные данные:
- ФИО: [ФИО полностью]
- Дата рождения: [Дата]
- Место рождения: [Место]
- Гражданство: [Гражданство]
- Документ, удостоверяющий личность: [Тип], № [Номер], выдан [Дата] [Орган]

Цель заявления:
[Опишите, что вы запрашиваете и почему]

Прилагаемые документы:
1. Копия документа, удостоверяющего личность
2. [Документ 2]
3. [Документ 3]

Подтверждаю, что вся предоставленная информация является точной и полной.

Дата: [Дата]

_______________________
[Ваше ФИО]
[Подпись]`,
      kz: `Кімге: [Мемлекеттік орган басшысы]
[Орган атауы]
[Мекенжай]

Кімнен: [Сіздің аты-жөніңіз]
ЖСН: [Жеке сәйкестендіру нөмірі]
Мекенжай: [Сіздің мекенжайыңыз]
Телефон: [Сіздің телефоныңыз]
Email: [Сіздің email-іңіз]

ӨТІНІШ

Мен, [Сіздің аты-жөніңіз], [нақты қызмет/рұқсат/құжат] сұраймын.

Жеке мәліметтер:
- Аты-жөні: [Аты-жөні толық]
- Туған күні: [Күні]
- Туған жері: [Орны]
- Азаматтығы: [Азаматтық]
- Жеке куәлік: [Түрі], № [Нөмірі], [Күні] [Орган] берген

Өтініш мақсаты:
[Не сұрап тұрғаныңызды және себебін сипаттаңыз]

Қоса берілген құжаттар:
1. Жеке куәліктің көшірмесі
2. [Құжат 2]
3. [Құжат 3]

Берілген барлық ақпараттың дұрыс және толық екенін растаймын.

Күні: [Күні]

_______________________
[Сіздің аты-жөніңіз]
[Қолы]`
    }
  },
  {
    id: 'citizen-appeal',
    titleKey: 'citizenAppeal',
    descKey: 'citizenAppealDesc',
    category: 'government',
    content: {
      en: `To: [Official Title and Name]
[Government Body Name]
[Address]

From: [Your Full Name]
IIN: [Individual Identification Number]
Address: [Your Address]
Phone: [Your Phone]
Email: [Your Email]

CITIZEN APPEAL

Dear [Official Title and Name],

I am writing to bring to your attention the following matter:

Subject: [Brief description of the issue]

Detailed Description:
[Provide a comprehensive description of the issue, including dates, locations, and relevant details]

Previous Steps Taken:
[List any previous attempts to resolve the issue]

Requested Action:
[Clearly state what action you are requesting from the authority]

Supporting Documents:
1. [Document 1]
2. [Document 2]

According to the Law on Citizens' Appeals, I request a response within the legally established timeframe.

Date: [Date]

_______________________
[Your Full Name]
[Signature]`,
      ru: `Кому: [Должность и ФИО]
[Название государственного органа]
[Адрес]

От: [Ваше ФИО]
ИИН: [Индивидуальный идентификационный номер]
Адрес: [Ваш адрес]
Телефон: [Ваш телефон]
Email: [Ваш email]

ОБРАЩЕНИЕ ГРАЖДАНИНА

Уважаемый(ая) [Должность и ФИО],

Обращаюсь к Вам по следующему вопросу:

Тема: [Краткое описание проблемы]

Подробное описание:
[Предоставьте полное описание проблемы, включая даты, места и важные детали]

Ранее предпринятые шаги:
[Перечислите предыдущие попытки решить вопрос]

Прошу:
[Чётко укажите, какие действия вы просите предпринять]

Прилагаемые документы:
1. [Документ 1]
2. [Документ 2]

В соответствии с Законом об обращениях граждан прошу предоставить ответ в установленные законом сроки.

Дата: [Дата]

_______________________
[Ваше ФИО]
[Подпись]`,
      kz: `Кімге: [Лауазымы және аты-жөні]
[Мемлекеттік орган атауы]
[Мекенжай]

Кімнен: [Сіздің аты-жөніңіз]
ЖСН: [Жеке сәйкестендіру нөмірі]
Мекенжай: [Сіздің мекенжайыңыз]
Телефон: [Сіздің телефоныңыз]
Email: [Сіздің email-іңіз]

АЗАМАТТЫҢ ӨТІНІШІ

Құрметті [Лауазымы және аты-жөні],

Сізге келесі мәселе бойынша жүгінемін:

Тақырыбы: [Мәселенің қысқаша сипаттамасы]

Толық сипаттама:
[Мәселенің толық сипаттамасын, оның ішінде күндерін, орындарын және маңызды мәліметтерін беріңіз]

Бұрын қабылданған қадамдар:
[Мәселені шешудің алдыңғы әрекеттерін тізімдеңіз]

Сұранысым:
[Қандай әрекеттер қабылдауды сұрайтыныңызды нақты көрсетіңіз]

Қоса берілген құжаттар:
1. [Құжат 1]
2. [Құжат 2]

Азаматтардың өтініштері туралы Заңға сәйкес заңмен белгіленген мерзімде жауап беруіңізді сұраймын.

Күні: [Күні]

_______________________
[Сіздің аты-жөніңіз]
[Қолы]`
    }
  },
  {
    id: 'info-request',
    titleKey: 'infoRequest',
    descKey: 'infoRequestDesc',
    category: 'government',
    content: {
      en: `To: [Agency Name]
[Department]
[Address]

From: [Your Full Name]
IIN: [Individual Identification Number]
Address: [Your Address]
Phone: [Your Phone]
Email: [Your Email]

INFORMATION REQUEST

Pursuant to the Law on Access to Information, I hereby request the following information:

Description of Information Requested:
[Clearly describe what information you are seeking]

Purpose of Request:
[Explain why you need this information]

Preferred Format:
[ ] Paper copy
[ ] Electronic copy (email)
[ ] Review at location

Time Period Covered:
[Specify the date range if applicable]

I request that you provide the requested information within the timeframe established by law.

If this request cannot be fulfilled, please provide a written explanation of the reasons for denial.

Date: [Date]

_______________________
[Your Full Name]
[Signature]`,
      ru: `Кому: [Название органа]
[Отдел]
[Адрес]

От: [Ваше ФИО]
ИИН: [Индивидуальный идентификационный номер]
Адрес: [Ваш адрес]
Телефон: [Ваш телефон]
Email: [Ваш email]

ЗАПРОС ИНФОРМАЦИИ

В соответствии с Законом о доступе к информации прошу предоставить следующую информацию:

Описание запрашиваемой информации:
[Чётко опишите, какую информацию вы запрашиваете]

Цель запроса:
[Объясните, зачем вам нужна эта информация]

Предпочтительный формат:
[ ] Бумажная копия
[ ] Электронная копия (email)
[ ] Ознакомление на месте

Охватываемый период:
[Укажите диапазон дат, если применимо]

Прошу предоставить запрашиваемую информацию в установленные законом сроки.

В случае невозможности выполнения запроса прошу предоставить письменное объяснение причин отказа.

Дата: [Дата]

_______________________
[Ваше ФИО]
[Подпись]`,
      kz: `Кімге: [Орган атауы]
[Бөлім]
[Мекенжай]

Кімнен: [Сіздің аты-жөніңіз]
ЖСН: [Жеке сәйкестендіру нөмірі]
Мекенжай: [Сіздің мекенжайыңыз]
Телефон: [Сіздің телефоныңыз]
Email: [Сіздің email-іңіз]

АҚПАРАТ СҰРАУ

Ақпаратқа қол жеткізу туралы Заңға сәйкес келесі ақпаратты беруіңізді сұраймын:

Сұралатын ақпараттың сипаттамасы:
[Қандай ақпаратты сұрап тұрғаныңызды нақты сипаттаңыз]

Сұрау мақсаты:
[Бұл ақпарат не үшін керек екенін түсіндіріңіз]

Қалаулы формат:
[ ] Қағаз көшірме
[ ] Электрондық көшірме (email)
[ ] Жерінде танысу

Қамтылатын кезең:
[Қажет болса, күндер аралығын көрсетіңіз]

Сұралған ақпаратты заңмен белгіленген мерзімде беруіңізді сұраймын.

Сұрауды орындау мүмкін болмаған жағдайда бас тарту себептерінің жазбаша түсіндірмесін беруіңізді сұраймын.

Күні: [Күні]

_______________________
[Сіздің аты-жөніңіз]
[Қолы]`
    }
  },
]

export function getTemplatesByCategory(category: TemplateCategory): DocumentTemplate[] {
  return templates.filter(t => t.category === category)
}

export function getTemplateById(id: string): DocumentTemplate | undefined {
  return templates.find(t => t.id === id)
}

export function getAllTemplates(): DocumentTemplate[] {
  return templates
}
