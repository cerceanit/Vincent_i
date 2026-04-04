export type Language = 'en' | 'ru' | 'kz'

export const translations = {
  en: {
    // Header
    brand: 'Vincent',
    dashboard: 'Dashboard',
    
    // Landing Hero
    heroTitle: 'Create Professional Documents',
    heroTitleGradient: 'In Minutes',
    heroSubtitle: 'Legal templates from trusted sources. AI-powered customization. Export to DOCX or PDF.',
    
    // Two Pathways
    startWriting: 'Start Writing',
    startWritingDesc: 'Choose a template and customize it',
    needHelp: 'I Need Help',
    needHelpDesc: 'Answer a few questions and we\'ll find the right document',
    
    // Features
    featuresTitle: 'Everything you need',
    feature1Title: 'Trusted Templates',
    feature1Desc: 'Legal documents based on egov.kz standards',
    feature2Title: 'AI Enhancement',
    feature2Desc: 'Powered by Gemini for professional results',
    feature3Title: 'Multiple Formats',
    feature3Desc: 'Export to DOCX or PDF instantly',
    feature4Title: 'Save & Manage',
    feature4Desc: 'Store all your documents in one place',
    
    // Format Selection
    selectFormat: 'Select Output Format',
    formatDocx: 'Word Document',
    formatDocxDesc: 'Editable .docx format',
    formatPdf: 'PDF Document',
    formatPdfDesc: 'Fixed layout .pdf format',
    continue: 'Continue',
    back: 'Back',
    
    // Templates
    selectTemplate: 'Select a Template',
    templatePreview: 'Preview',
    useTemplate: 'Use This Template',
    
    // Template Categories
    personalDocs: 'Personal Documents',
    businessDocs: 'Business Documents',
    governmentDocs: 'Government & Legal',
    
    // Template Names
    leaveRequest: 'Leave Request',
    leaveRequestDesc: 'Formal request for time off from work',
    powerOfAttorney: 'Power of Attorney',
    powerOfAttorneyDesc: 'Authorization for someone to act on your behalf',
    receipt: 'Receipt/Acknowledgment',
    receiptDesc: 'Confirmation of receiving money or documents',
    complaint: 'Complaint',
    complaintDesc: 'Formal complaint to an organization',
    policeReport: 'Police Report',
    policeReportDesc: 'Statement to law enforcement',
    commercialOffer: 'Commercial Offer',
    commercialOfferDesc: 'Business proposal for services or products',
    businessLetter: 'Business Letter',
    businessLetterDesc: 'Professional correspondence',
    internalMemo: 'Internal Memo',
    internalMemoDesc: 'Communication within organization',
    acceptanceCert: 'Acceptance Certificate',
    acceptanceCertDesc: 'Document confirming receipt of goods/services',
    govApplication: 'Government Application',
    govApplicationDesc: 'Official request to government body',
    citizenAppeal: 'Citizen Appeal',
    citizenAppealDesc: 'Formal appeal to authorities',
    infoRequest: 'Information Request',
    infoRequestDesc: 'Request for official information',
    
    // Survey
    surveyTitle: 'Let\'s Find the Right Document',
    surveySubtitle: 'Answer a few questions to get personalized recommendations',
    q1: 'What is your situation?',
    q1a1: 'Personal matter',
    q1a2: 'Business matter',
    q1a3: 'Legal/Government matter',
    q2: 'What do you need to accomplish?',
    q2a1: 'Submit an application or request',
    q2a2: 'File a complaint',
    q2a3: 'Authorize someone',
    q2a4: 'Confirm something',
    q3: 'Who is the recipient?',
    q3a1: 'Government agency',
    q3a2: 'Company/Organization',
    q3a3: 'Individual person',
    q4: 'Is this matter urgent?',
    q4a1: 'Yes, urgent',
    q4a2: 'No, not urgent',
    q5: 'Any specific requirements?',
    q5Placeholder: 'Describe any additional details...',
    next: 'Next',
    skip: 'Skip',
    getRecommendations: 'Get Recommendations',
    recommendedTemplates: 'Recommended Templates',
    basedOnAnswers: 'Based on your answers, we recommend:',
    
    // Editor
    documentEditor: 'Document Editor',
    editContent: 'Edit your document below',
    generateWithAI: 'Generate with AI',
    generating: 'Generating...',
    exportDocument: 'Export Document',
    saveProject: 'Save Project',
    projectName: 'Project Name',
    projectNamePlaceholder: 'Enter project name...',
    
    // Dashboard
    myProjects: 'My Projects',
    noProjects: 'No projects yet',
    noProjectsDesc: 'Create your first document to see it here',
    createNew: 'Create New Document',
    search: 'Search projects...',
    lastEdited: 'Last edited',
    view: 'View',
    edit: 'Edit',
    delete: 'Delete',
    download: 'Download',
    confirmDelete: 'Delete this project?',
    confirmDeleteDesc: 'This action cannot be undone.',
    cancel: 'Cancel',
    
    // Footer
    footerText: 'Made with care for Kazakhstan',
    
    // Misc
    loading: 'Loading...',
    error: 'An error occurred',
    retry: 'Try again',
  },
  ru: {
    // Header
    brand: 'Винсент',
    dashboard: 'Мои документы',
    
    // Landing Hero
    heroTitle: 'Создавайте профессиональные документы',
    heroTitleGradient: 'За минуты',
    heroSubtitle: 'Юридические шаблоны из проверенных источников. ИИ-настройка. Экспорт в DOCX или PDF.',
    
    // Two Pathways
    startWriting: 'Начать писать',
    startWritingDesc: 'Выберите шаблон и настройте его',
    needHelp: 'Мне нужна помощь',
    needHelpDesc: 'Ответьте на несколько вопросов, и мы найдём нужный документ',
    
    // Features
    featuresTitle: 'Всё, что вам нужно',
    feature1Title: 'Проверенные шаблоны',
    feature1Desc: 'Документы на основе стандартов egov.kz',
    feature2Title: 'ИИ-улучшение',
    feature2Desc: 'Powered by Gemini для профессиональных результатов',
    feature3Title: 'Разные форматы',
    feature3Desc: 'Экспорт в DOCX или PDF мгновенно',
    feature4Title: 'Сохранение',
    feature4Desc: 'Храните все документы в одном месте',
    
    // Format Selection
    selectFormat: 'Выберите формат',
    formatDocx: 'Word документ',
    formatDocxDesc: 'Редактируемый формат .docx',
    formatPdf: 'PDF документ',
    formatPdfDesc: 'Фиксированный формат .pdf',
    continue: 'Продолжить',
    back: 'Назад',
    
    // Templates
    selectTemplate: 'Выберите шаблон',
    templatePreview: 'Просмотр',
    useTemplate: 'Использовать шаблон',
    
    // Template Categories
    personalDocs: 'Личные документы',
    businessDocs: 'Деловые документы',
    governmentDocs: 'Государственные документы',
    
    // Template Names
    leaveRequest: 'Заявление на отпуск',
    leaveRequestDesc: 'Официальный запрос на отпуск',
    powerOfAttorney: 'Доверенность',
    powerOfAttorneyDesc: 'Полномочия действовать от вашего имени',
    receipt: 'Расписка',
    receiptDesc: 'Подтверждение получения денег или документов',
    complaint: 'Жалоба',
    complaintDesc: 'Официальная жалоба в организацию',
    policeReport: 'Заявление в полицию',
    policeReportDesc: 'Заявление в правоохранительные органы',
    commercialOffer: 'Коммерческое предложение',
    commercialOfferDesc: 'Бизнес-предложение услуг или товаров',
    businessLetter: 'Деловое письмо',
    businessLetterDesc: 'Профессиональная переписка',
    internalMemo: 'Служебная записка',
    internalMemoDesc: 'Внутренняя коммуникация',
    acceptanceCert: 'Акт приёма-передачи',
    acceptanceCertDesc: 'Подтверждение получения товаров/услуг',
    govApplication: 'Заявление в госорган',
    govApplicationDesc: 'Официальный запрос в государственный орган',
    citizenAppeal: 'Обращение граждан',
    citizenAppealDesc: 'Официальное обращение к властям',
    infoRequest: 'Запрос информации',
    infoRequestDesc: 'Запрос официальной информации',
    
    // Survey
    surveyTitle: 'Найдём нужный документ',
    surveySubtitle: 'Ответьте на несколько вопросов для персональных рекомендаций',
    q1: 'Какова ваша ситуация?',
    q1a1: 'Личный вопрос',
    q1a2: 'Деловой вопрос',
    q1a3: 'Юридический/государственный вопрос',
    q2: 'Что вам нужно сделать?',
    q2a1: 'Подать заявление или запрос',
    q2a2: 'Подать жалобу',
    q2a3: 'Уполномочить кого-то',
    q2a4: 'Подтвердить что-то',
    q3: 'Кто получатель?',
    q3a1: 'Государственный орган',
    q3a2: 'Компания/Организация',
    q3a3: 'Физическое лицо',
    q4: 'Это срочно?',
    q4a1: 'Да, срочно',
    q4a2: 'Нет, не срочно',
    q5: 'Особые требования?',
    q5Placeholder: 'Опишите дополнительные детали...',
    next: 'Далее',
    skip: 'Пропустить',
    getRecommendations: 'Получить рекомендации',
    recommendedTemplates: 'Рекомендуемые шаблоны',
    basedOnAnswers: 'На основе ваших ответов рекомендуем:',
    
    // Editor
    documentEditor: 'Редактор документа',
    editContent: 'Редактируйте документ ниже',
    generateWithAI: 'Сгенерировать с ИИ',
    generating: 'Генерация...',
    exportDocument: 'Экспорт документа',
    saveProject: 'Сохранить проект',
    projectName: 'Название проекта',
    projectNamePlaceholder: 'Введите название проекта...',
    
    // Dashboard
    myProjects: 'Мои проекты',
    noProjects: 'Пока нет проектов',
    noProjectsDesc: 'Создайте первый документ, чтобы увидеть его здесь',
    createNew: 'Создать документ',
    search: 'Поиск проектов...',
    lastEdited: 'Последнее изменение',
    view: 'Просмотр',
    edit: 'Редактировать',
    delete: 'Удалить',
    download: 'Скачать',
    confirmDelete: 'Удалить этот проект?',
    confirmDeleteDesc: 'Это действие нельзя отменить.',
    cancel: 'Отмена',
    
    // Footer
    footerText: 'Сделано с заботой для Казахстана',
    
    // Misc
    loading: 'Загрузка...',
    error: 'Произошла ошибка',
    retry: 'Попробовать снова',
  },
  kz: {
    // Header
    brand: 'Винсент',
    dashboard: 'Менің құжаттарым',
    
    // Landing Hero
    heroTitle: 'Кәсіби құжаттар жасаңыз',
    heroTitleGradient: 'Бірнеше минутта',
    heroSubtitle: 'Сенімді көздерден заңды үлгілер. AI теңшеу. DOCX немесе PDF экспорты.',
    
    // Two Pathways
    startWriting: 'Жазуды бастау',
    startWritingDesc: 'Үлгіні таңдап, теңшеңіз',
    needHelp: 'Маған көмек керек',
    needHelpDesc: 'Бірнеше сұраққа жауап беріңіз, біз қажетті құжатты табамыз',
    
    // Features
    featuresTitle: 'Сізге қажет барлығы',
    feature1Title: 'Тексерілген үлгілер',
    feature1Desc: 'egov.kz стандарттары негізіндегі құжаттар',
    feature2Title: 'AI жақсарту',
    feature2Desc: 'Кәсіби нәтижелер үшін Gemini қолданылады',
    feature3Title: 'Әртүрлі форматтар',
    feature3Desc: 'DOCX немесе PDF экспорты бірден',
    feature4Title: 'Сақтау',
    feature4Desc: 'Барлық құжаттарды бір жерде сақтаңыз',
    
    // Format Selection
    selectFormat: 'Форматты таңдаңыз',
    formatDocx: 'Word құжаты',
    formatDocxDesc: 'Өңделетін .docx форматы',
    formatPdf: 'PDF құжаты',
    formatPdfDesc: 'Бекітілген .pdf форматы',
    continue: 'Жалғастыру',
    back: 'Артқа',
    
    // Templates
    selectTemplate: 'Үлгіні таңдаңыз',
    templatePreview: 'Алдын ала қарау',
    useTemplate: 'Бұл үлгіні пайдалану',
    
    // Template Categories
    personalDocs: 'Жеке құжаттар',
    businessDocs: 'Іскерлік құжаттар',
    governmentDocs: 'Мемлекеттік құжаттар',
    
    // Template Names
    leaveRequest: 'Демалысқа өтініш',
    leaveRequestDesc: 'Жұмыстан демалысқа ресми өтініш',
    powerOfAttorney: 'Сенімхат',
    powerOfAttorneyDesc: 'Сіздің атыңыздан әрекет ету өкілеттігі',
    receipt: 'Қолхат',
    receiptDesc: 'Ақша немесе құжаттарды алуды растау',
    complaint: 'Шағым',
    complaintDesc: 'Ұйымға ресми шағым',
    policeReport: 'Полицияға арыз',
    policeReportDesc: 'Құқық қорғау органдарына арыз',
    commercialOffer: 'Коммерциялық ұсыныс',
    commercialOfferDesc: 'Қызметтер немесе тауарларға бизнес ұсыныс',
    businessLetter: 'Іскерлік хат',
    businessLetterDesc: 'Кәсіби хат алмасу',
    internalMemo: 'Қызметтік жазба',
    internalMemoDesc: 'Ұйым ішіндегі байланыс',
    acceptanceCert: 'Қабылдау-тапсыру актісі',
    acceptanceCertDesc: 'Тауарларды/қызметтерді алуды растау',
    govApplication: 'Мемлекеттік органға өтініш',
    govApplicationDesc: 'Мемлекеттік органға ресми сұрау',
    citizenAppeal: 'Азаматтардың өтініші',
    citizenAppealDesc: 'Билікке ресми өтініш',
    infoRequest: 'Ақпарат сұрау',
    infoRequestDesc: 'Ресми ақпаратты сұрау',
    
    // Survey
    surveyTitle: 'Қажетті құжатты табайық',
    surveySubtitle: 'Жеке ұсыныстар алу үшін бірнеше сұраққа жауап беріңіз',
    q1: 'Сіздің жағдайыңыз қандай?',
    q1a1: 'Жеке мәселе',
    q1a2: 'Іскерлік мәселе',
    q1a3: 'Заңдық/мемлекеттік мәселе',
    q2: 'Не істеу керек?',
    q2a1: 'Өтініш немесе сұрау беру',
    q2a2: 'Шағым беру',
    q2a3: 'Біреуге өкілеттік беру',
    q2a4: 'Бір нәрсені растау',
    q3: 'Кім алушы?',
    q3a1: 'Мемлекеттік орган',
    q3a2: 'Компания/Ұйым',
    q3a3: 'Жеке тұлға',
    q4: 'Бұл шұғыл ма?',
    q4a1: 'Иә, шұғыл',
    q4a2: 'Жоқ, шұғыл емес',
    q5: 'Ерекше талаптар?',
    q5Placeholder: 'Қосымша мәліметтерді сипаттаңыз...',
    next: 'Келесі',
    skip: 'Өткізіп жіберу',
    getRecommendations: 'Ұсыныстар алу',
    recommendedTemplates: 'Ұсынылған үлгілер',
    basedOnAnswers: 'Сіздің жауаптарыңыз негізінде ұсынамыз:',
    
    // Editor
    documentEditor: 'Құжат редакторы',
    editContent: 'Құжатты төменде өңдеңіз',
    generateWithAI: 'AI-мен генерациялау',
    generating: 'Генерациялануда...',
    exportDocument: 'Құжатты экспорттау',
    saveProject: 'Жобаны сақтау',
    projectName: 'Жоба атауы',
    projectNamePlaceholder: 'Жоба атауын енгізіңіз...',
    
    // Dashboard
    myProjects: 'Менің жобаларым',
    noProjects: 'Жобалар жоқ',
    noProjectsDesc: 'Мұнда көру үшін бірінші құжатты жасаңыз',
    createNew: 'Жаңа құжат жасау',
    search: 'Жобаларды іздеу...',
    lastEdited: 'Соңғы өзгеріс',
    view: 'Қарау',
    edit: 'Өңдеу',
    delete: 'Жою',
    download: 'Жүктеу',
    confirmDelete: 'Бұл жобаны жою керек пе?',
    confirmDeleteDesc: 'Бұл әрекетті қайтару мүмкін емес.',
    cancel: 'Бас тарту',
    
    // Footer
    footerText: 'Қазақстан үшін қамқорлықпен жасалған',
    
    // Misc
    loading: 'Жүктелуде...',
    error: 'Қате орын алды',
    retry: 'Қайталап көріңіз',
  },
}

export type TranslationKey = keyof typeof translations.en

export function getTranslation(lang: Language, key: TranslationKey): string {
  return translations[lang][key] || translations.en[key] || key
}
