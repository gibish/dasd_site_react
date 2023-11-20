import { useContext, useEffect } from "react";
import { CurrentLanguageContext } from "../App";

import glushkov from "./../img/inst/Glushkov.jpg";
import myhalevych from "./../img/inst/Myhalevych.jpg";
import lebedyev from "./../img/inst/Lebedyev.jpg";
import mir from "./../img/inst/Myr1.jpg";
import electronika_C5 from "./../img/inst/Elektronika_C5.jpg";
import ek from "./../img/inst/EK.jpg";
import scit3 from "./../img/inst/Scit-3.jpg";
import amosov from "./../img/inst/Amosov.jpg";
import dorodnicyn from "./../img/inst/Dorodnicyn.jpg";

import Text from "../lng/lng_institute";

function Institute() {
  const { currentLanguage } = useContext(CurrentLanguageContext);

  useEffect(() => {
    for (const key in Text) {
      const elem = document.querySelector(`[data-lang=${key}]`);
      if (elem) {
        elem.textContent = Text[key][currentLanguage];
      }
    }
  }, [currentLanguage]);

  return (
    <main className="content">
      <div className="container">
        <div className="content__inner">
          <div className="content__title" data-lang="inst-content-welcome">
            About V.M.Glushkov's Institute of Cybernetics
          </div>
          <div className="content__descr" data-lang="inst-content-1">
            Victor Glushkov made a significant contribution to the development of fundamental researches in mathematics,
            cybernetics and computer technology. He created the theory of digital machines, discrete data converters,
            macro-pipeline computing, automated control systems, which became the foundation of the general theory of
            computing systems.
          </div>
          <div className="content__descr" data-lang="inst-content-2">
            Under his leadership there were developed a number of local computers and control systems based on their
            base, software-technology systems and systems for data processing, that have been widely applied. He offered
            new technologies for designing of computers and production of their element base. He founded a scientific
            school of theoretical cybernetics.
          </div>
          <div className="content__descr" data-lang="inst-content-3">
            In 1982 the Institute was named after V.M. Glushkov.
          </div>
          <div className="content__descr-img content__descr-img-caption">
            <img className="content__img" src={glushkov} alt="V.M. Glushkov" />
            <div className="content__descr" data-lang="inst-content-4">
              Founder and first director of the Institute of Cybernetics, academician V.M. Glushkov (1923-1982)
            </div>
          </div>
          <div className="content__descr" data-lang="inst-content-5">
            Volodymyr Mikhaylevich made a great contribution to theoretical and economic cybernetics and informatics.
            His works of the theory of optimal solutions, nonparametric statistics, development of mathematical tools of
            economic cybernetics and its practical application had great importance.
          </div>
          <div className="content__descr" data-lang="inst-content-6">
            He created and developed a method of successive analysis of alternatives, what essentially summarized the
            theory of statistical solutions and computational methods of dynamic programming. This method made possible
            to solve important economic problems in the area of planning, designing and control.
          </div>
          <div className="content__descr" data-lang="inst-content-7">
            His works helped to create high-performance computing systems, develop appropriate software, forming
            Informatics as science. V.S. Mikhalevich was initiator of development of the National Program of
            Informatization of Ukraine, the founder of scientific school of mathematical optimization.
          </div>
          <div className="content__descr-img content__descr-img-caption">
            <img className="content__img" src={myhalevych} alt="V.S. Myhalevych" />
            <div className="content__descr" data-lang="inst-content-8">
              Director of the Institute from 1982 to 1994, Academician V.S. Mikhalevich (1930-1994)
            </div>
          </div>
          <div className="content__descr" data-lang="inst-content-9">
            Institute history began in 1957, when at the base of Laboratory for computational mathematics and technology
            and Institute of mathematics of the Academy of sciences of Ukrainian Soviet Socialistic Republic there was
            established Computer center of Academy of sciences of Ukrainian Soviet Socialistic Republic, reformed in
            1962 into the Institute of Cybernetics of Academy of sciences of Ukrainian Soviet Socialistic Republic.
          </div>
          <div className="content__descr" data-lang="inst-content-10">
            In this laboratory in 1950, while it was as a part of Institute of electrical engineering of Academy of
            sciences of Ukrainian Soviet Socialistic Republic, under the leading of Academician S.O. Lebedev it was
            created the first in continental Europe and the USSR little electronic computer 'MZSM'.
          </div>
          <div className="content__descr" data-lang="inst-content-11">
            From first years of activity, in the Institute it was conducted in-depth theoretical study of optimization
            theory, abstract and applied theory of automata, the theory of discrete converters, the theory of artificial
            intelligence, theory of programming.
          </div>
          <div className="content__descr-img content__descr-img-caption">
            <img className="content__img" src={lebedyev} alt="S.O. Lebedev" />
            <div className="content__descr" data-lang="inst-content-12">
              Academician S.O. Lebedev (1902-1974)
            </div>
          </div>
          <div className="content__descr" data-lang="inst-content-13">
            Methods and tools of cybernetics has been extended to such sciences as economics, biology, medicine and the
            study of complex systems. Thus, there were laid the foundations of economic, biological, technical
            cybernetics, developed effective approaches to modeling and solving complex multidimensional problems.
          </div>
          <div className="content__descr" data-lang="inst-content-14">
            In addition to fundamental researches, the great importance was paid to applied works. In order to
            accelerate applied developments of the Institute in 1963 there was established Special design bureau of
            mathematical machines and systems with pilot plant, and in 1980 – Special design and technology office of
            software, which made significant contribution to the implementation of the researches of the Institute.
          </div>
          <div className="content__descr" data-lang="inst-content-15">
            Together with researches of computers with a high level of input and internal languages already in the 60th
            the foundation was laid for the creation and implementation of mini-computers for scientific calculations
            'Promin' and family of computers 'Mir', which became the foundation for the formation of industry of small
            computers in the country.
          </div>
          <div className="content__descr" data-lang="inst-content-16">
            In computers of this class there were implemented the innovative ideas of computing processes and
            architectures, which were then widely used in almost all domestic and foreign computers.
          </div>
          <div className="content__descr-img content__descr-img-caption">
            <img className="content__img" src={mir} alt="Computer 'MIR-1'" />
            <div className="content__descr" data-lang="inst-content-17">
              Computer 'MIR-1'
            </div>
          </div>
          <div className="content__descr" data-lang="inst-content-18">
            The results of creation of control computers were development of series of wide-purpose computer 'Dnipro',
            specialized control computer 'Kyiv' and so on. Creating the first domestic machine 'Dnipro' began the
            development of industrial control computers. At the end of 60's the 30% of computers in the Soviet Union
            were created on the base of researches of the Institute.
          </div>
          <div className="content__descr" data-lang="inst-content-19">
            Continued work on new principles of design of large computers has led in 1966 to development of technical
            project of large computer 'Ukraine'. It was not implemented in full, but it included many ideas, which in
            the future were used in computers in the USA in 70's.
          </div>
          <div className="content__descr" data-lang="inst-content-20">
            Thanks to proposed and developed concepts of computers of the Nejmanovsky type, there was developed and in
            1987 passed to serial production the first Soviet super-computer with macro-pipeline organization of
            calculations 'ES-1766', which at that time had no analogues in the world. At the same time it was started a
            new trend of Institute work in the field of programming – the development of theory and software for
            parallel computing. Suggested macro-pipeline principle of computational processes in parallel computers and
            detailed theoretical researches of relevant models and data structures for parallel macro-pipeline computing
            allowed to achieve a record performance in complex scientific and technical calculations and solving of
            tasks of information search in large volume data arrays.
          </div>
          <div className="content__descr" data-lang="inst-content-21">
            In 1970-1980 there were developed the theoretical foundations, practical methods and tools for the creation
            of mini- and micro-computers, which were oriented to different applications, as well as micro-computers with
            a flexible architecture and high technical and economic parameters. First in the country, it was developed
            samples and started mass production of such computers. In 1975, together with scientific production
            association 'Svitlana' it was created the first in country micro-computer on base of large integrated
            circuits 'Electronika-C5' and begun its serial production. Together with organizations and enterprises of
            ministries there were developed the basic models of personal computers ('ES-1840', 'ES-1841', 'Neuron',
            etc.) with characteristics that have opened new opportunities in various fields of automation.
          </div>
          <div className="content__descr" data-lang="inst-content-22">
            Along with the development of methods and tools for creating computers there were conducted researches,
            related to the expansion of their application area. It had been developed numerical methods for solving
            problems of applied mathematics and mechanics, the theory of filtration, nuclear physics and electronics.
            Methods of mathematical modeling and computer using in solving problems of automatic control acquired the
            great importance.
          </div>
          <div className="content__descr" data-lang="inst-content-23">
            Established in 60's the foundation of theory of optimal decisions later have led to the creation of
            efficient mathematical methods and means of solving optimal control and planning tasks. The most important
            of these methods were method of consistent analysis of variants, schemes of method of vector recession,
            generalized gradient methods of random search, methods of the theory of differential games and others. Due
            to their development, a significant contribution was made to the theory and practice of control of complex
            processes with computer using.
          </div>
          <div className="content__descr-img content__descr-img-caption">
            <img className="content__img" src={electronika_C5} alt="Microcomputer 'Electronika-C5'" />
            <div className="content__descr" data-lang="inst-content-24">
              Microcomputer 'Electronika-C5'
            </div>
          </div>
          <div className="content__descr" data-lang="inst-content-25">
            In particular, it was resolved important scientific and technical problems of calculating the optimal load
            of steel manufacture, choice of organizational decisions for construction of pipelines, planning of
            petroleum products transportation on a single transport network, water management and so on.
          </div>
          <div className="content__descr" data-lang="inst-content-26">
            In 1963 V.M. Glushkov put forward an idea of integration of computer centers in a national network, building
            on this basis a National automated system for information collecting and processing and the Republican
            automated system.
          </div>
          <div className="content__descr" data-lang="inst-content-27">
            As part of developing of automated systems of various levels and purposes, in 1967 the first time in the
            country together with Lviv television manufacturer, it was developed an automated enterprise management
            system 'Lviv', which contained a number of fundamentally new technical and economical solutions. For next
            several years, this system has been implemented in dozens of enterprises of country.
          </div>
          <div className="content__descr" data-lang="inst-content-28">
            It was developed and widely implemented in many metal manufactures the one of the best systems for
            technological processes control 'Galvanik', which in real time solved large complex of problems, related to
            control of galvanic process. Systems 'Lviv' and 'Galvanik' were ones of the first systems, which began the
            recognition of automatic control systems (ACS) in country, and as result the authors were awarded by USSR
            State Prize.
          </div>
          <div className="content__descr" data-lang="inst-content-29">
            At the end of 60's it was created a typical automated enterprise management system 'Kuntsevo' for management
            of multiproduct companies of machine building profiles. It was widely implemented standard software-hardware
            complexes 'Mars', 'Mercury', 'Bars' etc.
          </div>
          <div className="content__descr" data-lang="inst-content-30">
            At the end of 60's the Institute became one of the leading academic institutions, which favoured the
            development of science and technology policy in the field of automation and using of computer technologies
            in many areas.
          </div>
          <div className="content__descr" data-lang="inst-content-31">
            Unique computer-aided design systems were created and implemented into mechanical engineering, instrument
            making, and transport. Generally, in 60-70's the Institute has developed and transferred to industry more
            than 30 original computers and computer systems for different purposes, which had no analogues.
          </div>
          <div className="content__descr" data-lang="inst-content-32">
            In the Institute, it was carried out active work on mathematical software for computer centers of collective
            use. It was suggested innovative approaches for creating databases and their management systems, and
            methodological foundations of the industrial design of databases by using standard software and systems.
            Mathematical software of large systems, created at the Institute, was used in hundreds of organizations.
            Among them, there were series of programs for automated training, planning and simulation of medical and
            biological systems and so on.
          </div>
          <div className="content__descr" data-lang="inst-content-33">
            It was begun to develop the researches of theory of dynamic systems control and its applications to create
            automated systems for control of objects with distributed parameters, processes, physical experiments and
            ecological systems. Together with the Office of trunk pipelines 'Druzhba' there was implemented an automated
            control system of trunk pipelines.
          </div>
          <div className="content__descr" data-lang="inst-content-34">
            During work on artificial intelligence, started in 1959, there was created series of intelligent systems,
            including for recognition of images and oral language. Series of informational medical, biological and
            diagnostic systems were developed and implemented.
          </div>
          <div className="content__descr" data-lang="inst-content-35">
            In the early years of the Institute activity, the device 'artificial heart-lung' was created to support
            human life during heart surgery. Later devices 'Myoton', 'Myostymul' and their modifications were developed
            and are still widely used in medical practice for patient treatment.
          </div>
          <div className="content__descr" data-lang="inst-content-36">
            A significant event in the Institute life was the creation of 'Encyclopedia of Cybernetics', first one in
            the world.
          </div>
          <div className="content__descr-img content__descr-img-caption">
            <img className="content__img" src={ek} alt="Encyclopedia of Cybernetics" />
            <div className="content__descr" data-lang="inst-content-37">
              Encyclopedia of Cybernetics
            </div>
          </div>
          <div className="content__descr" data-lang="inst-content-38">
            Due to the relevance of scientific subjects, scale and breadth of researches, the Institute in the late 80's
            and early 90's turned into a comprehensive research organization, which included Institute of Cybernetics
            with learning center, Special design bureau of mathematical machines and systems with engineering centers,
            Special design-technology bureau of the software, and computing center for collective using 'Orbit'. It had
            6500 employees, including 70 doctors of sciences and about 600 candidates of science.
          </div>
          <div className="content__descr" data-lang="inst-content-39">
            In the early 90's, after the collapse of the Soviet Union, demand for the practical developments of the
            Institute decreased, and the maintenance of such a large institution became problematic. It was decided to
            structural reorganize the Institute and make reorientation of applied researches. On the basis of subunits
            of the Institute there were formed a separate research institutions, united in Cybernetic Center of National
            Academy of Sciences of Ukraine, which today includes V.M. Glushkov Institute of cybernetics of National
            academy of sciences of Ukraine (the basic institution), the Institute of mathematical machines and systems
            of NAS of Ukraine, Institute of software systems of NAS of Ukraine, Institute for space researches of NAS of
            Ukraine and NCA of Ukraine, Institute of applied systems analysis of MES of Ukraine and NAS of Ukraine and
            International research and training center for information technology of NAS of Ukraine and MES of Ukraine.
          </div>
          <div className="content__descr" data-lang="inst-content-40">
            Over the years of Institute existence, along with works in theory and practice of creating high-performance
            computers, computing technology and problem-oriented systems for various purposes, there were intensively
            developed fundamentally new mathematical optimization methods for solving large dimension tasks, stochastic
            and discrete optimization, work on theory of differential games, simulation modeling etc.
          </div>
          <div className="content__descr" data-lang="inst-content-41">
            It was obtained fundamental results in the theory of programming, systems analysis, information security,
            theory and practice of creating knowledge bases, artificial intelligence systems, general management theory,
            information technologies, mathematical software for a wide range of computer tools and data processing
            systems, methods of forecasting.
          </div>
          <div className="content__descr" data-lang="inst-content-42">
            On the basis of obtained theoretical results it was developed applied information technologies to solve
            urgent practical problems: information technologies were developed for solving optimization problems, which
            had place in the modeling of economic processes, designing of objects of heat industry, solving problems of
            ecology and environmental protection. These ones include a number of technologies aimed at analysis of soil
            state, rational construction of various engineering structures, including hydroelectric power plants,
            evaluating the effectiveness of engineering measures to prevent environmental disasters.
          </div>
          <div className="content__descr" data-lang="inst-content-43">
            It was developed effective methods for solving a wide class of problems of reliability analysis of complex
            technical systems, risk assessment of environmentally hazardous activities, creation of highly reliable
            systems for data protection.
          </div>
          <div className="content__descr" data-lang="inst-content-44">
            It was introduced a new technology in software development – Inertial simulation.
          </div>
          <div className="content__descr" data-lang="inst-content-45">
            Geophysical information technology 'GeoPoshuk' was widely introduced in the domestic organizations for
            integrated interpretation of geophysical researches of wells. Technology 'RTS-methane' was developed and
            proposed to use for economics and mathematical modeling of schemes of methane utilization.
          </div>
          <div className="content__descr" data-lang="inst-content-46">
            It was resolved the applied problems of control of space vehicles, soft landing of aircraft, finding moving
            objects in water and so on.
          </div>
          <div className="content__descr" data-lang="inst-content-47">
            A technology of registration, visualization and analysis of magnetic field parameters of human heart in
            order to diagnose its diseases was developed (with the Institute of Cardiology named Strazhesko AMS of
            Ukraine).
          </div>
          <div className="content__descr" data-lang="inst-content-48">
            An important attention of the Institute is paid to tasks of the National Informatization Program of Ukraine,
            particularly to development and creation of information technologies for automation of government bodies.
          </div>
          <div className="content__descr" data-lang="inst-content-49">
            It was developed:
          </div>
          <div className="content__descr">
            <ul className="content__descr-ul">
              <li data-lang="inst-content-49-1">
                automated system for monitoring of infectious diseases for Ministry of health of Ukraine;
              </li>
              <li data-lang="inst-content-49-2">
                automated system for business planning of innovative projects for State innovation fund of Ukraine;
              </li>
              <li data-lang="inst-content-49-3">
                automated information system for collecting of information on preferences for the State tax
                administration of Ukraine;
              </li>
              <li data-lang="inst-content-49-4">
                comprehensive automated system for supporting of activity of Social insurance fund on temporary
                disability of Ukraine and its regional offices;
              </li>
              <li data-lang="inst-content-49-5">
                automated registration and control system of appeals to the Supreme court of Ukraine and others.
              </li>
            </ul>
          </div>
          <div className="content__descr" data-lang="inst-content-50">
            One of the important achievements of the Institute is creating in 2004-2007 a family of supercomputers for
            information technologies (SCIT) – high-performance computing cluster systems on modern element base.
          </div>
          <div className="content__descr" data-lang="inst-content-51">
            The possibility of effective intellectual processing of large volume of data and knowledge base gives them
            significant advantages. Already now on cluster supercomputer it is implemented several information
            technologies for solving important classes of problems of practical application.
          </div>
          <div className="content__descr" data-lang="inst-content-52">
            Supercomputers of SKIT family combined in complex with productivity about 6 trillion operations per second.
            Through the Internet it serves the needs of the scientific community of NAS of Ukraine and universities and
            is one of the super-nodes in the international Grid system. This makes possible to solve fundamentally new
            problems of trans-computing complexity in areas of science researches, economics, ecology, agriculture,
            technology, security in space and other areas.
          </div>
          <div className="content__descr" data-lang="inst-content-53">
            Today, there are such main areas of researches in the institute:
          </div>
          <div className="content__descr">
            <ul className="content__descr-ul">
              <li data-lang="inst-content-53-1">
                development of general theory and methods of system analysis, mathematical modeling, optimization and
                artificial intelligence;
              </li>
              <li data-lang="inst-content-53-2">
                development of general control theory, methods and tools for building intelligent control systems of
                various levels and for different application;
              </li>
              <li data-lang="inst-content-53-3">
                creation of general theory of computers and development of advanced computer technology, artificial
                intelligence and computer science;
              </li>
              <li data-lang="inst-content-53-4">
                development of perspective systems of mathematical software of general and applied purposes;
              </li>
              <li data-lang="inst-content-53-5">
                development of new information technologies and intelligent systems;
              </li>
              <li data-lang="inst-content-53-6">
                solving of fundamental and applied problems of informatization society.
              </li>
            </ul>
          </div>
          <div className="content__descr-img content__descr-img-caption">
            <img className="content__img" src={scit3} alt="Supercomputer complex (SCIT)" />
            <div className="content__descr" data-lang="inst-content-54">
              Supercomputer complex (SCIT)
            </div>
          </div>
          <div className="content__descr" data-lang="inst-content-55">
            Over fifty years at V.M. Glushkov Institute of Cybernetics of NAS of Ukraine there were formed science
            schools of computer mathematics and discrete optimization, mathematical theory of computing system and
            artificial intelligence, systems analysis and stochastic programming, mathematical theory of reliability and
            theory of programming, which gained international recognition.
          </div>
          <div className="content__descr" data-lang="inst-content-56">
            In addition to researches, Institute also carries a great scientific and organizational work, which is
            managed by the Academic council of Institute – a collegial advisory body to control Institute activity.
          </div>
          <div className="content__descr" data-lang="inst-content-57">
            The Institute has the Scientific councils for defence of doctoral and PhD degrees. Postgraduate and doctoral
            training at the Institute involves many specialties in the field of informatics. Within the walls of
            Institution, about 250 doctors and 1000 candidates of sciences were prepared.
          </div>
          <div className="content__descr" data-lang="inst-content-58">
            Much attention is paid to work with the students. Institute has branches of the Department of computational
            mathematics of Taras Shevchenko Kyiv National University, and Department of automated data processing
            systems and control of the National Technical University of Ukraine 'Kyiv Polytechnic Institute'.
          </div>
          <div className="content__descr" data-lang="inst-content-59">
            Institute publishes three international scientific journals, which are translated abroad: 'Cybernetics and
            systems analysis', 'Control systems and machines' (together with International research and training center
            for information technology and systems), 'Problems of control and informatics' (together with the Institute
            of space researches), collected articles 'Computer mathematics', 'Theory of optimal solutions', 'Computer
            tools, systems and networks', 'Cybernetics and computer technology' (together with the International
            research and training center for information technology and systems).
          </div>
          <div className="content__descr" data-lang="inst-content-60">
            Institute scientists published over 400 books and thousands of articles, which very often are translated
            abroad, received hundreds of inventor certificates. The scientific-technical library of the Institute has
            about 300 thousand units.
          </div>
          <div className="content__descr" data-lang="inst-content-61">
            The Institute coordinates works in informatics, thanks to cooperation with international coordinating
            organizations and participation of its leading scientists in the research and expert councils, and
            management of scientific programs. On the initiative of the Institute, it was developed National program of
            informatization of Ukraine and a number of laws, relating to its implementation.
          </div>
          <div className="content__descr" data-lang="inst-content-62">
            The Institute is the basic organization of Cybernetics center of NAS of Ukraine, National Committee of
            Ukraine in informatics, Scientific council of the problem 'Cybernetics', Scientific council 'Intelligent
            information technologies' of the NAS of Ukraine, Ukrainian federation of informatics, which is a part of an
            international organization on informatics CEPIS. International scientific relations of the Institute cover a
            wide range of leading research centers in the world. Among them – International institute for applied
            systems analysis, Keplerian University (Austria), Zurich University, Institute for operations research
            (Switzerland), Technical university of Otto von Gerike (Germany), Yale University, University of Florida
            (USA), London city university and others.
          </div>
          <div className="content__descr" data-lang="inst-content-63">
            The Institute annually conducts international conferences in computer science and actively participates in
            many academic forums and conferences around the world.
          </div>
          <div className="content__descr" data-lang="inst-content-64">
            Scientific achievements of the Institute are awarded two Lenin Prize, 29 State Prizes of USSR and Ukraine,
            over 40 personal and other prizes.
          </div>
          <div className="content__descr" data-lang="inst-content-65">
            National academy of sciences of Ukraine was founded Prizes, named after famous scientists, names of which
            associated with establishment and development of the Institute – S.O. Lebedev, V.M. Glushkov, V.S.
            Mikhalevich, A.O. Dorodnitsyna, M.M. Amosov.
          </div>
          <div className="content__descr-img content__descr-img-caption">
            <img className="content__img" src={amosov} alt="M.M. Amosov" />
            <div className="content__descr" data-lang="inst-content-66">
              Academician of NAS of Ukraine M.M. Amosov. He made a significant contribution to development of biological
              and medical cybernetics
            </div>
          </div>
          <div className="content__descr-img content__descr-img-caption">
            <img className="content__img" src={dorodnicyn} alt="A.O. Dorodnitsyn" />
            <div className="content__descr" data-lang="inst-content-67">
              Academician A.O. Dorodnitsyn. He made a significant contribution to establishment of Institute and
              development of its subject areas
            </div>
          </div>
          <div className="content__descr" data-lang="inst-content-68">
            Recognition of Institute is awarding V.M. Glushkov in 1997 by the medal 'Pioneer of computer technology' by
            worldwide computer society. Leading scientists of the Institute are elected as foreign members to scientific
            societies, honorary doctorates, professors of leading foreign and domestic universities.
          </div>
        </div>
        {/* <!-- END OF Content inner--> */}
      </div>
    </main>
  );
}

export default Institute;
