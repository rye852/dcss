const arrFromText = (text: string, symbole: string): questionType[] => {
  return text
    .split(symbole)
    .slice(0, -1)
    .map((e, i) => {
      return {
        id: i,
        content: e
          .slice(text.split(symbole).slice(0, -1)[i].indexOf('-') + 1)
          .slice(1),
      };
    });
};

export type HospitalType = {
  name: string;
  phoneNumber: number;
  location: string;
};
export type langType = 'English' | 'Arabic';
export type SignUpInLangType = {
  signInBtn: string;
  SignUpBtn: string;
  userName: string;
  Email: string;
  password: string;
  gender: {
    gender: string;
    man: string;
    women: string;
  };
  send: string;
};
export type cardType = {
  cardContent: string;
  herf: 'test' | 'articals' | 'contact';
  linkContent: string;
};
export type questionType = {
  id: number;
  content: string;
};

export type fileType = {
  lang: langType;
  NavBar: string;
  SignInUp: SignUpInLangType;
  message: string;
  whatIsYourState: string;
  yourState: string;
  states: string[];
  publicity: string;
  publicityFromAnssawer: {
    bad: string;
    good: string;
  };
  cardsOfLinks: cardType[];
  testQuestions: questionType[];
  progress: string;
  cardOptions: string[];
  btnCard: string;
  score: string;
  adviceToContact: string;
  adviceToRead: string;
  youAreGood: string;
  resultLink: string[];
  paragraph: (string | string[])[];
  paragraphTitle: string;
  pargrapheVideoTitle: string;
  hospitals: HospitalType[];
  theadContent: string[];
};

export const languagsEngAr: fileType[] = [
  {
    lang: 'English',
    NavBar: 'Elictronic Safe',
    SignInUp: {
      signInBtn: 'Sign In',
      SignUpBtn: 'Sign Up',
      userName: 'name',
      Email: 'E-mail',
      password: 'Password',
      gender: {
        gender: 'gender',
        man: 'man',
        women: 'women',
      },
      send: 'send',
    },
    message: 'Welcome' + ' ',
    whatIsYourState: 'how is Your Mental Health todady :',
    yourState: ' Your Mental Healthis' + ' ',
    states: ['Bad', 'upset', 'ecellent', 'happy'],
    publicity: 'it will be usuful to see the following sections :',
    publicityFromAnssawer: {
      bad: `we are upset to hear that.
      we hope that your mental health will be good as soon as possible`,
      good: `we are happy to hear that.
      we always wish you good health`,
    },
    cardsOfLinks: [
      {
        cardContent:
          'You can measure your mental health through the following questions',
        herf: 'test',
        linkContent: 'click here',
      },
      {
        cardContent:
          'You can read the academic article and listen to the video to help improve your mental health',
        herf: 'articals',
        linkContent: 'click here',
      },
      {
        cardContent:
          'You can contact the hospital closest to you and book an appointment',
        herf: 'contact',
        linkContent: 'click here',
      },
    ],
    testQuestions: arrFromText(
      `1- Do you feel satisfied with your current job?
    
    2- Do you feel a balance between work and personal life?
    
    3- Do you experience mental exhaustion due to work demands?
    
    4- Do you suffer from work-related anxiety?
    
    5- Do you feel depression or deep sadness due to work?
    
    6- Do you experience stress or psychological pressure in the workplace?
    
    7- Do you struggle with difficulty concentrating and paying attention during work hours?
    
    8- Do you feel hostility or discomfort in dealing with your colleagues at work?
    
    9- Do you feel frustrated or demotivated due to lack of appreciation or recognition for
    your efforts at work?
    
    10- Do you feel frustrated due to a lack of opportunities for growth and advancement in
    the workplace?
    
    11- Do you feel motivated and engaged in performing your daily tasks?
    
    12- Do you believe you have the necessary support from your colleagues and manager
    at work?
    
    13- Do you feel social isolation or loneliness in the workplace?
    
    14- Do you feel able to freely express your opinions and ideas in the work environment?
    
    15- Do you feel a match between your skills and the requirements of your job?
    
    16- Do you feel enthusiasm and a desire to be present and engaged in your work?`,
      '?'
    ),
    progress: 'Progress',
    cardOptions: ['No', 'Some Times', 'Yes'],
    btnCard: 'Next',
    score: 'Your score is',
    adviceToContact:
      'We advise to contact the hospital numbers included in this application',
    adviceToRead:
      'We advise you to read the acadimic article and watch the video to help with mental clarity',
    youAreGood:
      'You have achieved a wonderful percentage. we hope that you will always be in good health',
    resultLink: ['home', 'Hospitals', 'Articals & advice'],
    paragraph: [
      `Firstly: acknowledge your feelings.

    Most of the time, we experience physical sensations such as blushing, pressure, or an accelerated
    
    heartbeat, which are signals that you are under stress. Therefore, it's important not to make any
    
    decisions while in this state.
    `,
      `Secondly: learn the company's policies.
    
    If you work for a company or an organization, it's important to familiarize yourself with its policies. If they support employees in addressing their emotions or psychological issues, it is wise to set
    
    boundaries when sharing personal problems or feelings with colleagues or managers.`,
      `Thirdly: find a trusted person.
    
    It's good to share your feelings with a colleague you trust at work. However, not everyone in the
    
    workplace will have this level of trust, so it's important to find a friend at work whom you can confide in`,
      `Fourthl: adjust your approach.
    
    If you are a manager or a supervisor, it is important to adjust your approach to create a supportive
    
    environment in the company where colleagues and employees feel comfortable sharing their ideas.`,
      `Fifthly: accept different perspectives and beliefs.
    
    We don't choose the people we work with in a company, as it consists of various personalities and work styles. Not everyone in the company will feel energized and engaged, so it's important to focus on your tasks at work and be curious only about matters that are relevant to your job.`,
      `Sixthly: set boundaries.
    
    While it may seem nice to spend some leisure time with colleagues at work, intertwining
    
    relationships can increase mixed feelings and incidents within them. Therefore, it's important to set boundaries for your relationships at work and handle interactions with employees and colleagues carefully, making an effort to maintain your personal life without stirring up problems`,
      `Seventhly: prepare your toolkit for taking notes.
    
    When you feel anxious or experience symptoms of mental disorders, it's important to confront your
    
    feelings and engage in behaviors such as meditation, deep breathing, or spending time outdoors.`,
      [
        `How can you enhance self-care and mental health?
    
    Smail problems can lead to bigger issues, and self-care is not always the ultimate solution. However, here are some tips that can help you take good care of yourself:`,
        `Vacation: Your vacation days are part of your psychological compensation and a way to recharge your
    
    energy.`,
        `  Sleep: Lack of sleep or disrupted sleep can lead to feelings of fatigue, increasing the chances of stress and depression.
    
    42`,
        `    Eating: Take time to have your meals, even if it's just for a few minutes. Have your sandwich or a cup of coffee outside of the workplace during your break, as it nourishes your mind.`,
        `Seeking help: If you feel that your pressures require intervention from others, consult a mental
    
        health professional to help you deal with these emotions.`,
      ],
    ],
    paragraphTitle: `Academic Article`,
    pargrapheVideoTitle: 'To help with mental clarity',
    hospitals: [
      {
        name: 'Irada Mental Health Hospital',
        location: 'Jizan',
        phoneNumber: parseFloat('0173312076'),
      },
      {
        name: 'Al Amal & Psychiatric Hospital',
        location: 'Riyadh',
        phoneNumber: parseFloat('00966114804548'),
      },
      {
        name: 'Mental health hospital',
        location: 'Jeddah',
        phoneNumber: parseFloat('0126361078'),
      },
      {
        name: 'Mental Health Hospital',
        location: 'Taif',
        phoneNumber: parseFloat('0127466555'),
      },
      {
        name: 'Mental Health Hospital',
        location: 'Al Madinah Al Munawwarah',
        phoneNumber: parseFloat('0148619321'),
      },
      {
        name: 'Mental Health Hospital',
        location: 'Asir',
        phoneNumber: parseFloat('0172329674'),
      },
      {
        name: 'Mental Health Hospital',
        location: 'Abha',
        phoneNumber: parseFloat('0172329674'),
      },
      {
        name: 'Sound Mind Complex',
        location: 'Jazan',
        phoneNumber: parseFloat('0539975555'),
      },
      {
        name: 'i can center',
        location: 'Riyadh',
        phoneNumber: parseFloat('0556648249'),
      },
      {
        name: 'Priory Wellbeing center',
        location: 'Riyadh',
        phoneNumber: parseFloat('0112270200'),
      },
      {
        name: 'Mental Health Hospital',
        location: 'Jeddah',
        phoneNumber: parseFloat('0126361078'),
      },
      {
        name: 'Waad Group for Health & Wellbeing',
        location: 'Jeddah',
        phoneNumber: parseFloat('0591402043'),
      },
      {
        name: 'Al Amal Hospital',
        location: 'Dammam',
        phoneNumber: parseFloat('0138392448'),
      },
      {
        name: 'Mental Health Hospital',
        location: 'Al Madinah Al Munawwarah',
        phoneNumber: parseFloat('0148402002'),
      },
      {
        name: 'Armed Forces Center for Psychiatric care',
        location: 'Taif',
        phoneNumber: parseFloat('0127336100'),
      },
      {
        name: 'Clinical psychology unit',
        location: 'Tabuk',
        phoneNumber: parseFloat('0144562332'),
      },
    ],
    theadContent: ['Hospital Name', 'Location', 'Phone Number'],
  },
  {
    lang: 'Arabic',
    NavBar: ' الصحة الالكترونية',
    SignInUp: {
      signInBtn: 'تسجيل الدخول',
      SignUpBtn: 'إنشاء حساب',
      userName: 'إسم المستخدم',
      Email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      gender: {
        gender: 'الجنس',
        man: 'ذكر',
        women: 'أنثى',
      },
      send: 'إرسال',
    },
    message: 'مرحبا بك' + ' ',
    whatIsYourState: 'كيف هي حالتك النفسية :',
    yourState: ' حالتك النفسية هي' + ' ',
    states: ['سيئة', 'ليست جيدة', 'طبيعية', 'ممتازة'],
    publicity: ' سوف يكون من المفيد زيارة الصفحات التالية :',
    publicityFromAnssawer: {
      bad: `نحن نشعر بخيبة أمل لسماع ذلك. نأمل أن يكون صحتك العقلية جيدة في أقرب وقت ممكن`,
      good: `نحن سعداء لسماع ذلك. نتمنى دائمًا لك الصحة الجيدة`,
    },
    cardsOfLinks: [
      {
        cardContent: 'يمكنك قياس صحتك العقلية من خلال الأسئلة التالية',
        herf: 'test',
        linkContent: 'إضغط هنا',
      },
      {
        cardContent:
          'يمكنك قراءة المقال الأكاديمي والاستماع إلى الفيديو للمساعدة في تحسين صحتك العقلية',
        herf: 'articals',
        linkContent: 'إضغط هنا',
      },
      {
        cardContent: 'يمكنك الاتصال بأقرب مستشفى إليك وحجز موعد',
        herf: 'contact',
        linkContent: 'إضغط هنا',
      },
    ],
    testQuestions: arrFromText(
      `1- هل تشعر بالرضا عن وظيفتك الحالية؟

      2- هل تشعر بتوازن بين العمل والحياة الشخصية؟
      
      3- هل تعاني من الإرهاق العقلي بسبب متطلبات العمل؟
      
      4- هل تعاني من القلق المرتبط بالعمل؟
      
      5- هل تشعر بالاكتئاب أو الحزن العميق بسبب العمل؟
      
      6- هل تواجه الإجهاد أو الضغط النفسي في مكان العمل؟
      
      7- هل تعاني من صعوبة في التركيز والانتباه خلال ساعات العمل؟
      
      8- هل تشعر بالعداء أو الاستياء في التعامل مع زملائك في العمل؟
      
      9- هل تشعر بالإحباط أو فقدان الدافع بسبب عدم تقدير أو اعتراف بجهودك في العمل؟
      
      10- هل تشعر بالإحباط بسبب نقص الفرص للنمو والتقدم في مكان العمل؟
      
      11- هل تشعر بالتحفيز والمشاركة في أداء مهامك اليومية؟
      
      12- هل تعتقد أنك تحظى بالدعم اللازم من زملائك ومديرك في العمل؟
      
      13- هل تشعر بالعزلة الاجتماعية أو الوحدة في مكان العمل؟
      
      14- هل تشعر بأنك قادر على التعبير بحرية عن آرائك وأفكارك في بيئة العمل؟
      
      15- هل تشعر بالتناغم بين مهاراتك ومتطلبات وظيفتك؟
      
      16- هل تشعر بالحماس والرغبة في التواجد والانخراط في عملك؟
      `,
      '؟'
    ),
    progress: 'التقدم',
    cardOptions: ['لا', 'أحيانا', 'أجل'],
    btnCard: 'التالي',
    score: 'نتيجتك هي',
    adviceToContact: 'ننصح بالاتصال بأرقام المستشفى المدرجة في هذا التطبيق.',
    adviceToRead:
      'ننصحك بقراءة المقال الأكاديمي ومشاهدة الفيديو للمساعدة في وضوح العقل',
    youAreGood: 'لقد اجتزت الإختبار بشكل جيد حالتك النفسية في أحسن أحوالها',
    resultLink: ['الرئيسية', 'المستشفيات', 'المقالات والنصائح'],
    paragraph: [
      `أولًا، قم بالاعتراف بمشاعرك.

    في معظم الأحيان، نشعر بالأحاسيس الجسدية مثل احمرار الوجه، والضغط، أو زيادة نبضات القلب، وهذه إشارات تدل على أنك تحت ضغط نفسي. لذلك، من المهم عدم اتخاذ أي قرارات في هذه الحالة.`,
      `ثانيًا، تعرف على سياسات الشركة.
    
    إذا كنت تعمل في شركة أو مؤسسة، فمن المهم أن تتعرف على سياساتها. إذا كانت تدعم الموظفين في التعامل مع مشاعرهم أو قضاياهم النفسية، فمن الحكمة وضع حدود عندما تشارك المشاكل الشخصية أو المشاعر مع الزملاء أو المديرين.`,
      `ثالثًا، ابحث عن شخص موثوق به.
    
    من الجيد أن تشارك مشاعرك مع زميل تثق به في العمل. ومع ذلك، ليس لدى الجميع في مكان العمل هذا المستوى من الثقة، لذا فمن المهم أن تجد صديقًا في العمل يمكنك الثقة به.`,
      `رابعًا، قم بتعديل نهجك.
    
      إذا كنت مديرًا أو مشرفًا، فمن المهم أن تعدل نهجك لخلق بيئة داعمة في الشركة حيث يشعر الزملاء والموظفون بالراحة في مشاركة أفكارهم.`,
      `خامسًا، قبول وجهات نظر ومعتقدات مختلفة.
    
    نحن لا نختار الأشخاص الذين نعمل معهم في الشركة، حيث تتألف من شخصيات وأساليب عمل متنوعة. لن يشعر الجميع في الشركة بالحماس والانخراط، لذا فمن المهم التركيز على مهامك في العمل وأن تكون فضوليًا فقط بالأمور ذات الصلة بوظيفتك.`,
      `سادسًا، حدد الحدود.
    
    على الرغم من أنه قد يبدو لطيفًا قضاء بعض الوقت الفراغ مع الزملاء في العمل، إلا أن تشابك العلاقات يمكن أن يزيد من المشاعر المتباينة والحوادث داخلها. لذلك، من المهم وضع حدود لعلاقاتك في العمل وتعامل بحذر مع التفاعلات مع الموظفين والزملاء، وبذل جهد للحفاظ على حياتك الشخصية دون إثارة المشاكل.`,
      `سابعًا، قم بإعداد أدواتك لأخذ الملاحظات.
    
    عندما تشعر بالقلق أو تعاني من أعراض اضطرابات نفسية، من المهم مواجهة مشاعرك والمشاركة في سلوكيات مثل التأمل والتنفس العميق أو قضاء وقت في الهواء الطلق.`,
      [
        ` كيف يمكنك تعزيز الرعاية الذاتية والصحة العقلية؟
    
    قد تؤدي المشاكل الصغيرة إلى مشاكل أكبر، وليست الرعاية الذاتية دائمًا الحل النهائي. ومع ذلك، هنا بعض النصائح التي يمكن أن تساعدك في رعاية نفسك بشكل جيد:`,
        `العطلة: إجازتك هي جزء من تعويضك النفسي ووسيلة لإعادة شحن طاقتك.`,
        `النوم: نقص النوم أو اضطراب النوم يمكن أن يؤدي إلى شعور بالتعب وزيادة فرص الإجهاد والاكتئاب.`,
        `التغذية: خذ وقتًا لتناول وجباتك، حتى لو كانت لبضع دقائق فقط. تناول ساندويتشك أو فنجان من القهوة خارج مكان العمل خلال استراحتك، حيث يغذي عقلك.`,
        `طلب المساعدة: إذا شعرت أن ضغوطك تحتاج إلى تدخل من الآخرين، استشر متخصص في الصحة العقلية لمساعدتك في التعامل مع هذه المشاعر.`,
      ],
    ],
    paragraphTitle: `مقال أكاديمي`,
    pargrapheVideoTitle: 'للمساعدة في وضوح العقل',
    hospitals: [
      {
        name: 'مستشفى إرادة للصحة النفسية',
        location: 'جازان',
        phoneNumber: parseFloat('0173312076'),
      },
      {
        name: 'مجمع الأمل بالصحة النفسية',
        location: 'الرياض',
        phoneNumber: parseFloat('00966114804548'),
      },
      {
        name: 'مستشفى الصحة النفسية',
        location: 'جدة',
        phoneNumber: parseFloat('0126361078'),
      },
      {
        name: 'مستشفى و إرادة الصحة النفسية',
        location: 'الطائف',
        phoneNumber: parseFloat('0127466555'),
      },
      {
        name: 'مستشفى الصحة النفسية',
        location: 'المدينه المنوره',
        phoneNumber: parseFloat('0148619321'),
      },
      {
        name: 'مستشفى الصحة النفسية',
        location: 'عسير',
        phoneNumber: parseFloat('0172329674'),
      },
      {
        name: 'مستشفى الصحة النفسية',
        location: 'أبها',
        phoneNumber: parseFloat('0172329674'),
      },
      {
        name: 'مجمع العقل السليم',
        location: 'جازان',
        phoneNumber: parseFloat('0539975555'),
      },
      {
        name: 'مركز أستطيع',
        location: 'الرياض',
        phoneNumber: parseFloat('0556648249'),
      },
      {
        name: 'مركز بريوري للعافية',
        location: 'الرياض',
        phoneNumber: parseFloat('0112270200'),
      },
      {
        name: 'مستشفى الصحة النفسية',
        location: 'جدة',
        phoneNumber: parseFloat('0126361078'),
      },
      {
        name: 'مجموعة وعد للصحة والعافية',
        location: 'جدة',
        phoneNumber: parseFloat('0591402043'),
      },
      {
        name: 'مستشفى الامل',
        location: 'الدمام',
        phoneNumber: parseFloat('0138392448'),
      },
      {
        name: 'مستشفى الصحة النفسية',
        location: 'المدينه المنوره',
        phoneNumber: parseFloat('0148402002'),
      },
      {
        name: 'مركز القوات المسلحة للرعاية النفسية',
        location: 'الطائف',
        phoneNumber: parseFloat('0127336100'),
      },
      {
        name: 'وحدة علم النفس الاكلينيكي',
        location: 'تبوك',
        phoneNumber: parseFloat('0144562332'),
      },
    ],
    theadContent: ['اسم المستشفى', 'اسم المستشفى', 'رقم الهاتف'],
  },
];
