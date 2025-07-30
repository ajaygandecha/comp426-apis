export const dynamic = 'force-static'
 
export async function GET() {

    const data = [
        {
            "name": "App Team Carolina",
            "shorthand": "App Team",
            "description": "The mission of App Team Carolina is to create a collaborative space for UNC students to design, build, and release apps for Apple platforms. App Team Carolina's multi-faceted development process aims to leverage its individual skillsets while encouraging cooperation among team members with different levels of experience."
        },
        {
            "name": "Black in Technology",
            "shorthand": "BIT",
            "description": "Black in Technology (BiT) is a student and technology-based organization, that dedicates itself to the development of intensive programs for increasing Black and other ethnic participation in the field of technology and Computer Science. BiT aims to increase the representation of Black students pursuing degrees in technology at the University of North Carolina at Chapel Hill. The primary mission of BiT is to voice the concerns of members and work to create an inclusive ecosystem for Black technology majors to thrive within the University."
        },
        {
            "name": "Rams Hack",
            "shorthand": "Rams Hack",
            "description": "Rams Hack provides a learning environment for those interested in computer security and hacking culture. We participate in local and online â€œhackingâ€ competitions. We can connect students with professional members of the community and sometimes host speakers from outside the university."
        },
        {
            "name": "CS+Social Good",
            "shorthand": "CSSG",
            "description": "Through technology, we have the opportunity to be a part of the positive change and evolution of a growing world of possibility. We aim to give nonprofits and organizations for social good in the Chapel Hill area the tools to effectively complete their goals with the use of knowledge and programs. We partner with 2-3 organizations per semester and develop custom technology solutions for their needs. These groups include 501(c) organizations, student groups, and Ph.D. candidates."
        },
        {
            "name": "Women in Computer Science",
            "shorthand": "WICS",
            "description": "The Women in Computer Science club at UNC Chapel Hill (WiCS) is a social, professional, and academic organization to empower and enable women in computer science. We host a variety of events throughout the year aimed at bringing together the women in tech here on campus and supporting them through mentorship, informative talks, and networking events. We frequently team up with the other organizations in the Computer Science department dedicated to eradicating the gender gap for co-hosted events and coordinate with Girls Who Code and PearlHacks each year."
        },
        {
            "name": "Carolina Augmented and Virtual Reality",
            "shorthand": "CARVR",
            "description": "CARVR is a student organization at UNC Chapel Hill that promotes student development in XR technologies. Students explore XR technologies, learn XR development, work on XR projects and connect to clients to create real-world applications. All students, graduate or undergraduate, in any discipline are welcome to join!"
        },
        {
            "name": "Carolina Analytics & Data Science Club",
            "shorthand": "CADS",
            "description": "CADS provides students interested in Data Science opportunities to grow personally, intellectually, professionally, and socially among a support network of students, professors, and career professionals. This mission is to be accomplished through events, including a speaker series from industry professionals, data case competition, workshops, and investigating and analyzing University and community data to drive community-based projects and solutions."
        },
        {
            "name": "Girls Who Code",
            "shorthand": "GWC",
            "description": "Girls Who Code is a non-profit organization which aims to support and increase the number of women in computer science. The UNC Girls Who Code club aims to get middle- and high-school girls involved in and excited about technology. Any middle- or high-school girl can participate. UNC Computer Science undergraduate and graduate students can apply to become volunteers."
        },
        {
            "name": "Kappa Theta Pi",
            "shorthand": "KTP",
            "description": "Kappa Theta Pi is UNC's first professional technology-focused co-ed fraternity. The purpose of this organization is to provide a close-knit community for STEM students to develop socially, professionally, and academically through various events. We will host events including socials, hackathons, alumni networking events, professional development workshops, and tech-based community service. Our members will learn a plethora of skills needed to stay knowledgeable about the tech industry, form a valuable network of brothers, give back to the community via philanthropy, and develop a strong sense of professional development for future job positions."
        },
        {
            "name": "Game Development Club",
            "shorthand": "Game Dev",
            "description": "The mission of UNC-CH Game Development Club is to provide a space for anyone interested in learning how to develop video games, whether they have no experience in it whatsoever or are already seasoned game developers. The club is open to anyone that can contribute in the video game development process whether they are interested in programming, 3D modeling, character design, storyboarding, music, creative writing, or any other related creative processes. The club also seeks to encourage students not studying computer science to join because game development requires more than just programmers to create a game. Game development is most often associated with computer programming, but it actually requires a much more diverse group of individuals skilled in different creative disciplines. UNC-CH Game Development Club seeks to foster this type of environment and be open to anyone that wishes to learn about this collective creative process."
        },
        {
            "name": "HackNC",
            "shorthand": "HackNC",
            "description": "HackNC is a weekend (Nov 2nd - 3rd) for students of all skill levels to broaden their talents. Your challenge is to make an awesome project in just 24 hours. You will have access to hands-on workshops and demos from our sponsors, as well as exciting talks about the awesome things happening right now with computer science and technology - not to mention all of the free food, shirts, stickers, and swag!"
        },
        {
            "name": "Product Management Club",
            "shorthand": "PM Club",
            "description": ""
        },
        {
            "name": "queer_hack",
            "shorthand": "queer_hack",
            "description": "Vision: We envision a future with a tech culture that is inclusive and accessible for LGBTQ+ people. \nMission: We aim to empower LGBTQ+ students in tech by fostering peer connections and curating opportunities to grow as a programmer. Our event programming includes skill-building workshops, weekly study groups, social events, career networking opportunities, and an annual hackathon.\nWhether you're already a Computer Science major or just interested in exploring coding, we'd love for you to join the community."
        },
        {
            "name": "Pearl Hacks",
            "shorthand": "Pearl Hacks",
            "description": "Pearl Hacks strives to empower women and gender non-conforming students in the field of computer science. We encourage our participants to learn and innovate using their coding skills, and we welcome first-time hackers by creating a collaborative environment for them to learn new skills. Additionally, we welcome a diverse group of minorities and remind them that they are amazing and needed in a field stereotypically dominated by men."
        },
        {
            "name": "Enabling Technology",
            "shorthand": "Enabling Tech",
            "description": "The Enabling Technology Club allows students at UNC to utilize their knowledge in computer science, artistic ability, and leadership skills to create and design computer programs of books and video games through Tar Heel Reader and Tar Heel Gameplay for children and teenagers with disabilities. The organization provides UNC students with an accessible opportunity to serve the community, share their creative enabling technology ideas, and make an impact on the lives of others. Composed of all kinds of students from UNC, the Enabling Technology Club will be an organization for ANYONE who has a desire to help people with disabilities. The club will not limit its membership to just computer science students, as it needs artistic students as well as students who simply support the cause to work on club activities. Additionally, the organization will allow students to learn about the numerous different parts of computer programs and how their work will contribute on a large scale across the globe."
        },
        {
            "name": "Competitive Programming Club",
            "shorthand": "CPC",
            "description": "Our organization, the Competitive Programming Club, serves to guide prospective programmers into the preparation for the ICPC (International collegiate programming contest), and for coding assessments seen in technical interviews. In the past, competition preparation has been offered as a course (COMP 222) which is currently discontinued. As a placeholder, this student-led club provides a way to provide resources and guidance for ICPC - to, from, and by UNC students.  Aside from help and resources to get better at solving programming problems and advancing in the competition, learning these sorts of problems is also extremely beneficial for sharpening your problem-solving skills, in a collaborative, guided environment where you give and receive help to/from other students, who are all collectively working together to become better programmers.  If you are interested, please join the Discord server, where all communication, information, and notifications will take place"
        },
        {
            "name": "ESports",
            "shorthand": "ESports",
            "description": "Our goal is to provide a positive and welcoming environment for everyone to pursue their interests in video-game culture. Whether that interest is in content creation, casting, game development, playing video games, getting into competitive esports, or simply watching video games, we are here to ensure that everyone has the space and resources to do so. Using our access to the Carolina Gaming Arena, we can ensure that you will have the opportunity and resources to play and compete in your favorite games with peak performance.We have members who play and discuss, though not limited to, the following games: League of Legends, DotA 2, Rocket League, Overwatch, Counter-Strike: Global Offensive, Valorant,  Rainbow Six Siege, Smash Ultimate, Super Smash Bros. Melee, Minecraft, Pokemon, World of Warcraft, Hearthstone, Beat Saber and many more! We also have competitive teams and players who compete in collegiate leagues for the following games: League of Legends (3+ teams), DotA 2, Rocket League (2+ teams), Overwatch, Counter Strike, Global Offensive (2 teams), Valorant, Rainbow Six Siege, Smash Ultimate, and Super Smash Bros Melee. We also have casters and content producers for our content creation outlets. We also play casually a multitude of other games! Join the club, post on our wall, come to our events, meet people, and most importantly...HAVE FUN!"
        },
        {
            "name": "ACM at Carolina",
            "shorthand": "ACM",
            "description": "We are a professional community of Tar Heels who study computing; we are dedicated to exploring our field, defining our interests, engaging with each other, discovering our strengths, and improving our skills."
        },
        {
            "name": "Latinos in Tech",
            "shorthand": "Latinos in Tech",
            "description": "Latinos in Tech is a student-led organization at UNC-Chapel Hill that intends to serve as a support system for Hispanic/Latino students interested in technology-related fields including computer science, data science, and information science."
        },
        {
            "name": "CS Experience Labs",
            "shorthand": "CSXL",
            "description": "CSXL is a technical experience accelerator, community hub, and coworking space for undergraduate students at UNC Chapel Hill.\n\nWe are an inclusive community passionate about personal growth, professional development, and practical experience with tech.\n\nOur goal is to kick-start succesful careers in software engineering, user experience design, production engineering, and product management.\n\nWe host collaborative workshops for students who want to learn by making.\n\nOur Coworking Space is found in Sitterson Hall and is available for students to collaborate on side projects and course work."
        },
        {
            "name": "National Society of Black Engineers",
            "shorthand": "NSBE",
            "description": "The mission of the National Society of Black Engineers is \"to increase the number of culturally responsible Black Engineers who excel academically, succeed professionally and positively impact the community.\"\nNSBE offers students pursuing a career in STEM with the opportunity to participate both in national and on campus networking events to further prepare them for the world after graduation."
        },
        {
            "name": "Artificial Intelligence Club at UNC",
            "shorthand": "AI@UNC",
            "description": "AI@UNC aims to break the barriers that limit student engagement with AI at UNC. Recognizing that AI isnâ€™t exclusive to graduate students and upperclassmen, we believe that understanding AI is within reach of all students. We will use a quality over quantity approach to deliver concentrated value for both non-technical members seeking to understand the practical and ethical implications of AI and technical members seeking to build impactful tools guided by professors and more experienced technical chairs.\nWebsite: https://www.ai-unc.com\nLinktree: https://linktr.ee/aiunc"
        },
        {
            "name": "Business Technology Club ",
            "shorthand": "Busi-Tech",
            "description": "We are the premier tech student organization at UNC-Chapel Hillâ€™s Kenan-Flagler Business School, providing unparalleled opportunities for students to connect, learn, and lead at the crossroads of business and technology. We provide many benefits to our members, including resume reviews with experienced senior leadership, trainings from top-tier tech companies, a network of like-minded individuals via our dedicated member and alumni base, and our annual tech trek to New York City."
        }
    ];

  return Response.json({
    data
   })
}