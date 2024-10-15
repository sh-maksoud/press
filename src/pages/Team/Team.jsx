import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: "مدير المدرسة",
      role: "مدير",
      image: "/images/principal.jpg",
      description: "يدير جميع الأنشطة التعليمية والإدارية.",
    },
    {
      name: "أحمد علي",
      role: "مدير الإذاعة",
      image: "/images/radio_director.jpg",
      description: "يقوم بإعداد البرامج الإذاعية وتنظيم البث.",
    },
    {
      name: "ايناس السيد",
      role: "رئيسة تحرير الصحافة",
      image: "/images/editor.jpg",
      description: "تدير محتوى الصحافة المدرسية وتنسق المقالات.",
    },
    {
      name: "محمد حسن",
      role: "مقدم برامج",
      image: "/images/program_presenter.jpg",
      description: "يقدم البرامج الإذاعية ويجري المقابلات.",
    },

    {
      name: "علي السعيد",
      role: "مدير التواصل الاجتماعي",
      image: "/images/social_media_manager.jpg",
      description: "يدير الحسابات الاجتماعية ويعزز التفاعل مع الجمهور.",
    },
    {
      name: "محمد أحمد",
      role: "محرر أخبار",
      image: "/images/news_editor.jpg",
      description: "يكتب المقالات الإخبارية ويحرر المحتوى.",
    },
  ];

  return (
    <div className="team-container">
      <h2>فريق العمل</h2>
      <p>تعرف على أعضاء فريقنا الذين يساهمون في نجاح الإذاعة والصحافة المدرسية.</p>
      <div className="team-list">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} className="member-image" />
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
