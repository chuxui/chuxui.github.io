$(function () {

    "use strict";

    // Some variables for later
    var dictionary, set_lang;
    var selectedLanguage = readCookie('lang') || 'english';

    // Object literal behaving as multi-dictionary
    dictionary = {
        "english": {
            "_logo": "CHUXUI",
            "_about": "About",
            "_contact": "Contact",
            "_projects": "Projects",
            "_last": "Last Projects",
            "_social": "Find me also here",
            "_language": "Language",

            "_home": "home",
            "_previous": "previous",
            "_next": "next",
            "_about_p": "About the Project",
            "_obj": "Objective",
            "_desktop": "Desktop App",
            "_mobile": "Mobile App",
            "_watch": "Watch App",
            "_anim": "Animations",
            "_guides": "Design Guidelines",
            "_wprog": "Work Progress",
            "_concl": "Conclusion",
            "_onbo": "Onboarding Animation",
            "_promo": "Promo Site",

            "_ab_title": "Hi There!",
            "_ab_subtitle1": "My name is Chris Jimenez and I am the designer of the projects you can see in this site.",
            "_ab_subtitle2": "From Barcelona, I am constantly learning all about UX & UI and ready for new challenges. Maybe we can create something marvelous together.",
            "_ab_skills": "Skills",
            "_ab_skills1": "Pixel Perfection with Sketch, Photoshop and Illustrator",
            "_ab_skills2": "Moving things with After Effects and Principle",
            "_ab_skills3": "Prototyping with Invision or Axure",
            "_ab_skills4": "Smart with HTML and CSS",
            "_ab_skills5": "Perfectionist in Brands Design",
            "_ab_skills6": "Daily updated about Android and iOS Design Guidelines",
            "_ab_skills7": "Research UX/UI Design trends every day",
            "_ab_skills8": "Video Editor with Premiere/FinalCut",
            "_ab_skills9": "Creating objects with 3DsMax and SketchUp",
            "_ab_skills10": "Basic knowledges on JS",
            "_ab_exp": "Experience",
            "_ab_exp0": "Visual Designer - InfoJobs-Schibsted Spain - 2016/Act",
            "_ab_exp1": "UX/UI Designer - Freelance - 2015/2016",
            "_ab_exp2": "UX/UI Designer - Mobiquity Networks - 2014/2015",
            "_ab_exp3": "UX/UI Designer - Puck Solutions - 2014",
            "_ab_exp4": "UX/UI Designer - Droids4Dev - 2012/2014",
            "_ab_exp5": "Visual Designer & Design Teacher - City Hall of Terrassa - 2011/2012",
            "_ab_exp6": "MotionGrapher - gisela.com - 2010",
            "_ab_exp7": "Video Editor - KB - 2009/2010",
            "_ab_exp8": "Graphic Designer - Milcap Media Group - 2007/2008",
            "_ab_exp9": "Graphic Technician - Hewlett Packard - 2007",
            "_ab_exp10": "Graphic Designer - Studi Lettera - 2006",
            "_ab_know": "Knowledge",
            "_ab_know1": "Higher Technical Certificate in graphic design - EASC - 2002/2008",
            "_ab_know2": "Web Design HTML & CSS - ESPAI School - 2010/2011",
            "_ab_know3": "Web design Grade A - Gniux University - 2014",
            "_ab_awa": "Awards",
            "_ab_awa1": "1st Place of Megathon Windows - App: Urban Garden Hero - 2013",
            "_ab_awa2": "1st Place of video contest Baumann Fest - 2011",
            "_ab_hob": "Hobbies",
            "_ab_hob1": "Sometimes I need the relaxation of molding shapes with clay",
            "_ab_hob2": "Other times I like to cut, measure, and create some new objects in wood",
            "_ab_hob3": "And typical: draw, cook, travel, sports...",

            "_caps_subtitle": "E-commerce Site",
            "_h_subtitle": "Accomodation Site",
            "_wroups_subtitle": "Material Design Social App",
            "_mn_subtitle": "Mobile Advertising Platform",
            "_mosic_subtitle": "iOS Music & Sport App",
            "_ugh_subtitle": "iOS Plants App",
            "_ably_subtitle": "Android Care App",
            "_cc_subtitle": "Android Social App",

            "_caps_about_p": "<i>Caps</i> is an e-commerce site focused on cap’s retail. Simple with lots of whitespace in order to make the experience easy to the user at the time of purchasing a product.",
            "_caps_obj": "The app was planned thinking on mobile first and reducing the differences between desktop and mobile for users on both platforms.", 
            "_caps_desktop": "The second bar below the promotional carrousel merges with the navbar of the site when the user scrolls. Simple filters bar with independent scroll and whitespace content highlights the selected product in a simple way.",       
            "_caps_mobile": "The users can always see the products in the content section and both filters and menu are shown in a sidebar, accessible whenever the user wants to but not taking space from the main content. This way, on small devices, we can keep focus on what matters, the caps.",
            "_caps_concl": "Designing <i>Caps</i> I dispensed of excessive details and kept a clean design throughout the structure of the app in a consistent manner and strengthen the user experience.",
            
            "_h_about_p": "<i>H</i>  is an simple accommodation site that provides the user an easy experience to rent hotel rooms. Is totally responsive and users can see the same interface in all they devices.",
            "_h_obj": "Analyzing the most popular accommodation sites I saw they had many differences between each of their platforms. The idea of this project is to simplify the way users see the platform between their devices and make a strong UX with a simple UI.",
            "_h_desktop": "Simple distribution of the elements of the site, whitespace fresh design, only highlighting the buttons and the hotel's photos. In hotel details page, users don't need the filters bar anymore and the new important information are the available hotel rooms and these replace the filters.",
            "_h_mobile": "Users will have the same experience as in desktop platform. Same elements with the difference that the view of the filters or the available rooms are optionally displayed. At first the users only have to place some basic info and start seeing the hotels.",
            "_h_wprog": "I sketched and made the wireframes in paper. I saw this project’s structure clearly from the beginning and decided I wouldn’t waste much time making wireframes with some application. Later I designed the platform screens and all the components and icons in Sketch App, using Symbols and Styled Texts. Finaly I tested the mobile site in Invision App.",
            "_h_guides": "I love Roboto Font Family (also SF Family) and when I want to simplify a design I prefer to use strong fonts. Icons are linear and soft so they don’t outshine the text in the platform. Icons in the platform are visual help but not essential.",
            "_h_concl": "With <i>H</i>  I learned how to simplify a project you may think at first is not possible to because of the big amount of data displayed in other similar platforms, without loosing usabilty.",
            
            "_wroups_about_p": "<i>Wroups</i>  is a social app to find new friends with similar likes. Is a link app to whatsapp groups.",
            "_wroups_obj":"Design a simple and effective app with Material Design and use the same styles in the desktop platform.",
            "_wroups_mobile":"I wanted to faithfully use the <i>Material Design Guidelines</i> for this project but at the same time make an app with its own personality. Wroups have a simple layout and a colorful design that makes it an attractive and powerful app.",
            "_wroups_concl":"I updated my knowledge on <i>Material Design Guidelines</i> with <i>Wroups</i> and I enjoyed designing the app. For the next <i>Material Design</i> project I will put more focus on <i>Material Motion</i>.",

            "_mn_about_p": "<i>Mobiquity Networks</i> powers a leading national location based mobile advertising and app engagement network in the US. They use a targeted, location-based approach to reach audiences on their personal mobile devices when it matters the most. To do this, the development team in Barcelona had to plan and build a platform for <i>Mobiquity</i> Customers.",
            "_mn_obj": "The company had previously used an unstable platform that needed to be remade from zero. Therefore they also decided to improve the user experience for its customers. My job was to simplify the design of the new platform and improve the user experience with a simple and clear interface.",
            "_mn_analy": "Shows in a simple form the information that customers need of their users. The company wanted the filters to be always visible and as we knew there would not be more filters, we decided to place them under the header and take maximum width for the graphic.",
            "_mn_campa": "Through a drop-down list, it shows the information that customers need of their campaigns. A simple but effective table.",
            "_mn_newc": "We decided on a wizard to create new campaigns. From the beginning we knew we were going to have a lot of data here, so it was decided to make these divisions so the users can go step by step saving the information, so it’s more attainable to keep up with the content.",
            "_mn_apps": "For the applications I thought the best solution was to create a layout of cards with an expandable set up when edited for a quick and simple user experience. Here you can also see a warning with overlay and an alert.",
            "_mn_anim": "Interaction with some components of the application. I developed the styles and animating them in <i>css .less</i>.",
            "_mn_wprog": "We, the development team, worked in Scrum with Atlassian JIRA. I realize wireframes in Axure and when the platform was approved, I designed all the components with Adobe. Between a developer and I, we developed a styles guide of the interactive components  with our styles in <i>css .less</i> (similar to the bootstrap guide) for archiving and controlling well all the information. It can not be shown here for privacy issues limited by the company.",
            "_mn_guide": "For icons I decided to create a Glyphicon to make it easier to use them and because we saw that many of them would be repeated with different sizes and colors. It was great! The corporate colors were already set with the brand, I tried not to abuse them and decided to highlight details of the platform with a little more cheerful colors.",
            "_mn_concl": "In <i>Mobiquity</i> everything was a challenge. I had no knowledge of beacons, I faced the design challenge as the only designer with a team of devs, a classic client who does not want to risk.. Anyway, it was great working on the project! every day an adventure. We were (are) a big family and we worked very well and professionally. And above all, I learned a lot.",
        
            "_mosic_about_p": "<i>Mosic. MOve your muSIC.</i> It's an app that make gamification with the user's music and their movements. Encourages the user to do sport in a different way, listening their own music and make movements in the correct time to win more points and be the best <i>Mosics</i> at their favourite songs.",
            "_mosic_obj": "I wanted to experiment with a darker color scheme and thinking in <i>Watch</i> native app design from the beginning. A simple dark UI with bright details to make an attractive design.",
            "_mosic_mobile": "In usability it is said that a dark UI is negative because it can create mirror effect or be poor for people with vision problems. I've tested the app in <i>Invision</i> on multiple devices and the result is positive. Highlighted details make the app run in its entirety and the darkness is not a problem.",
            "_mosic_watch": "The <i>Watch</i> app has most of the <i>iPhone</i> app’s features. Shows the necessary functions with a successful result in usability.",
            "_mosic_promo": "For the promotional website, I wanted to do the same: darkness and simplicity.",
            "_mosic_wprog": "Wireframes in pencil and designed on <i>Photoshop Artboards</i>.",
            "_mosic_guide": "Black and yellow and the strong <i>San Francisco</i>, using the correct font family on the different devices.",
            "_mosic_concl": "I have attained a good result in usability with the dark interface and I am satisfied with the end result.",
        
            "_ugh_about_p": "With <i>Urban Garden Hero</i> taking care of your urban garden will be more simple and fun! <i>UGH</i> is a tool that allows you to manage your urban garden, telling you when you need to perform a maintenance task: watering, harvesting, etc. But besides this, as you perform those tasks, you'll get $eeds with which you can customize <i>Millo</i> (your sidekick) which will improve as you go on workin on your garden.",
            "_ugh_obj": "This project began as an <i>Windows Phone</i> app. I won along with two friends Devs the first prize of a hackathon WP. Here you can see the adaptation that I made of the app to iPhone. Cleaner and more attractive.",
            "_ugh_mobile": "The idea is simple and the app also had to be. Create list of your crops and their pots. The app will inform the users when they have to irrigate or harvest and if they do so they win <i>$eeds</i> with which evolves a character named <i>Millo</i> that is your avatar (designed by me as well). If you do not perform the tasks that tells you, the character loses strength. In this way the app incentives the user to continue using the app and keep their crops healthy.",
            "_ugh_concl": "With this project I learned to work on very short-term projects. we developed it during a weekend for this hackathon. Good teamwork and a lot of trust on our project made us win this event.",
        
            "_ably_about_p":"<i>Ably Care</i> is a monitor system to care of partially-dependent persons through your smartphone. Users can make emergency calls, receive alerts of possible falls, create events for the dependent person and make an alert on location if the person we care about has some cognition or memory problems.",
            "_ably_obj":"The purpose of this project was to design a simple and pleasant interface. Soft general colors while highlighting the alerts . In the animations at the bottom of the page you can see better the interactions.",
            "_ably_anim":"Animation of interactions and the onboarding project where made sticking to simplicity. I am however sure that on another scheme, the application design could be improved attaining better results and User Experience.",
       
            "_cc_about_p":"<i>Collect Club</i> is a place for collectors. A social app where users can archive they collections, sell, buy or swap items.",
            "_cc_obj":"I wanted to experiment with square elements. I designed both the icons and components without any rounded edges. The result is simple but as well can result a little aggressive.",
        },
        "spanish": {
            "_logo": "CHUXUI",
            "_about": "Sobre mí",
            "_contact": "Contacto",
            "_projects": "Proyectos",
            "_last": "Últimos Proyectos",
            "_social": "También estoy aquí",
            "_language": "Idioma",

            "_home": "inicio",
            "_previous": "anterior",
            "_next": "siguiente",
            "_about_p": "Sobre el Proyecto",
            "_obj": "Objetivo",
            "_desktop": "App Escritorio",
            "_mobile": "App Móvil",
            "_watch": "App Watch",
            "_anim": "Animaciones",
            "_guides": "Guías de Diseño",
            "_wprog": "Progreso del Trabajo",
            "_concl": "Conclusión",
            "_onbo": "Animación de Inicio",
            "_promo": "Sitio de Promoción",

            "_ab_title": "¡Hola!",
            "_ab_subtitle1": "Mi nombre es Chris Jiménez y soy el diseñador de los proyectos que pueden ver en esta web.",
            "_ab_subtitle2": "Desde Barcelona, estoy constantemente aprendiendo todo sobre UX & UI y dispuesto a nuevos retos. Tal vez podamos crear algo maravilloso juntos.",
            "_ab_skills": "Habilidades",
            "_ab_skills1": "Pixel Perfection con Sketch, Photoshop y Illustrator",
            "_ab_skills2": "Mover cosas con After Effects y Principle",
            "_ab_skills3": "Creación de prototipos con Invision o Axure",
            "_ab_skills4": "Hábil en HTML y CSS",
            "_ab_skills5": "Perfeccionista en Diseño de Marca",
            "_ab_skills6": "Conocimientos actualizados en las guias de diseño de iOS y Android",
            "_ab_skills7": "Investigación diaria sobre tendencias en UX/UI",
            "_ab_skills8": "Editor de video con Premiere/FinalCut",
            "_ab_skills9": "Creación de objetos con 3DsMax y SketchUp",
            "_ab_skills10": "Conocimientos básicos de JS",
            "_ab_exp": "Experiencia",
            "_ab_exp0": "Diseñador visual - InfoJobs-Schibsted Spain - 2016/Act",
            "_ab_exp1": "Diseñador UX/UI - Freelance - 2015/2016",
            "_ab_exp2": "Diseñador UX/UI - Mobiquity Networks - 2014/2015",
            "_ab_exp3": "Diseñador UX/UI - Puck Solutions - 2014",
            "_ab_exp4": "Diseñador UX/UI - Droids4Dev - 2012/2014",
            "_ab_exp5": "Diseñador Visual y Profesor de Diseño - Ayuntamiento de Terrassa - 2011/2012",
            "_ab_exp6": "MotionGrapher - gisela.com - 2010",
            "_ab_exp7": "Editor de Video - KB - 2009/2010",
            "_ab_exp8": "Diseñador Gráfico - Milcap Media Group - 2007/2008",
            "_ab_exp9": "Técnico Gráfico - Hewlett Packard - 2007",
            "_ab_exp10": "Diseñador Gráfico - Studi Lettera - 2006",
            "_ab_know": "Conocimiento",
            "_ab_know1": "Graduado Superior en Diseño Gráfico - EASC - 2002/2008",
            "_ab_know2": "Diseño Web HTML & CSS - Escuela ESPAI - 2010/2011",
            "_ab_know3": "Diseño Web Grado A - Gniux University - 2014",
            "_ab_awa": "Premios",
            "_ab_awa1": "1ª Posición de Megathon Windows - App: Urban Garden Hero - 2013",
            "_ab_awa2": "1ª Posición de Concurso de Video - Baumann Fest - 2011",
            "_ab_hob": "Hobbies",
            "_ab_hob1": "A veces necesito la relajación de moldear formas con arcilla",
            "_ab_hob2": "Otras veces me gusta cortar, medir y crear objetos en madera",
            "_ab_hob3": "Y más típicos: dibujar, cocinar, viajar, deportes...",

            "_caps_subtitle": "Tienda Online",
            "_h_subtitle": "Web de Alojamiento",
            "_wroups_subtitle": "Material Design App Social",
            "_mn_subtitle": "Plataforma de Publicidad Móvil",
            "_mosic_subtitle": "iOS App Música & Deporte",
            "_ugh_subtitle": "iOS App Plantas",
            "_ably_subtitle": "Android App Asistencia",
            "_cc_subtitle": "Android App Social",

            "_caps_about_p": "<i>Caps</i> es una tienda online enfocada en la compra de gorras. Una web sencilla que respeta el espacio en blanco para que la experiencia sea más fácil para el usuario en el momento de la compra de un producto.",
            "_caps_obj": "La app fue planificada pensando primero en diseño móvil y reduciendo las diferencias entre escritorio y móvil para los usuarios de ambas plataformas.",  
            "_caps_desktop": "La segunda barra de navegación debajo el carrusel de promoción, se funde con la barra de navegación principal de la web cuando el usuario hace scroll. Barra de filtros simple, con scroll independiente y destacando el producto seleccionado de una manera atractiva en el espacio de contenido.",       
            "_caps_mobile": "Los usuarios sólo ver los productos en el contenido. Los filtros y el menú se muestran en una barra lateral accesible cuando el usuario desea. De esta manera en pequeños dispositivos, mantenemos el foco de atención en lo importante, las gorras.",
            "_caps_concl": "Diseñando <i>Caps</i> prescindí de detalles excesivos y mantuve un diseño limpio en la estructura de la app de manera consistente y fortaleciendo la experiencia de usuario.",
            
            "_h_about_p": "<i>H</i> es una web de alojamiento sencilla que proporciona al usuario una experiencia fácil para alquilar habitaciones de hotel. Es totalmente responsive y los usuarios pueden ver la misma interfaz en todos sus dispositivos.",
            "_h_obj": "Analizando webs de alojamiento populares, vi que tienen muchas diferencias entre sus plataformas. La idea del proyecto es simplificar la forma en que los usuarios ven la plataforma entre sus dispositivos y crear una fuerte UX con una sencilla interfaz de usuario.",
            "_h_desktop": "Distribución simple de los elementos en la web, diseño fresco con mucho espacio en blanco, sólo resaltando los botones y las fotos de los hoteles. En la página de detalles de un hotel, los usuarios ya no necesitan la barra de filtros y la nueva información importante son las habitaciones del hotel disponibles y éstas sustituyen a los filtros.",
            "_h_mobile": "Los usuarios tendrán la misma experiencia que en la plataforma de escritorio. Los mismos elementos con la diferencia de que la vista de los filtros o las habitaciones disponibles se visualizan opcionalmente. Al principio, los usuarios sólo tienen que introducir la información básica y empezar a ver hoteles.",
            "_h_wprog": "Hice los bocetos y wireframes en papel. Vi este proyecto claramente desde el principio y no quería perder mucho tiempo en hacer wireframes con alguna aplicación. Más tarde diseñé las pantallas, los componentes e iconos con Sketch App, utilizando símbolos y estilos de texto. Finalmente he testeado la web móvil con Invision App.",
            "_h_guides": "Me gusta la familia de tipografías Roboto (también SF) y cuando quiero simplificar un diseño, prefiero usar una tipografía potente. Los iconos son lineales y suave para no resaltar más que el texto en la plataforma. Los iconos en la plataforma son de ayuda visual, pero no esenciales.",
            "_h_concl": "Con <i>H</i>  he aprendido cómo simplificar un proyecto que puedes pensar en un primer momento no es posible debido a la gran cantidad de datos que se muestran en otras plataformas similares, sin perder la usabilidad.",

            "_wroups_about_p":"<i>Wroups</i> es una app social para encontrar nuevos amigos con gustos similares. És una app de enlace a grupos de WhatsApp.",
            "_wroups_obj":"Diseñar una app sencilla y eficaz con <i>Material Design</i> y usar los mismos estilos en la plataforma de escritorio.",
            "_wroups_mobile":"Quería respetar fielmente las directrices de <i>Material Design</i> para este proyecto, pero al mismo tiempo hacer una aplicación con personalidad sin perder las guías de diseño. <i>Wroups</i> tienen una estructura sencilla y un diseño colorido que hace que sea una app atractiva y potente.",
            "_wroups_concl":"He actualizado mis conocimientos en <i>Material Design</i> con <i>Wroups</i> y disfruté diseñando la app. Para el próximo proyecto de <i>Material Design</i>, pondré más énfasis en <i>Material Motion</i>.",
        
            "_mn_about_p": "<i>Mobiquity Networks</i> es un potente líder en EEUU en base a red de localización móvil de la publicidad y la interacción con las aplicaciones. Utilizan un enfoque objetivo, basado en la localización para llegar al público en sus dispositivos móviles personales cuando más importa. Para ello, el equipo de desarrollo en Barcelona tuvimos que planificar y desarrollar una plataforma para los clientes de <i>Mobiquity</i>.",
            "_mn_obj": "La empresa disponía de una plataforma inestable y necesitaban rehacerla desde cero. Por ello decidieron también mejorar la experiencia de usuario para sus clientes. Mi trabajo consistió en simplificar el diseño de la nueva plataforma y mejorar la experiencia de usuario con una interfaz simple y clara.",
            "_mn_analy": "Muestra de forma sencilla la información que los clientes necesitan de sus usuarios. La empresa quería que los filtros estuvieran siempre visibles y como sabíamos que no habría más filtros, decidimos situarlos debajo del Header y aprovechar la anchura máxima para los gráficos.",
            "_mn_campa": "A través de un listado desplegable, se muestra la información que los clientes necesitan de sus campañas. Una tabla simple pero efectiva.",
            "_mn_newc": "Decidimos realizar un wizard para crear nuevas campañas. En un principio pensábamos que habrían muchos más datos, por lo que se decidió hacer está división de los apartados para que los usuarios pudieran guardar la información paso a paso y hacer más accesible el mantenimiento del contenido.",
            "_mn_apps": "Para las aplicaciones pensamos que la mejor solución era crear unas tarjetas expandibles al editarlas para tener una rápida y simple experiencia de usuario. Aquí también se pueden ver un warning con overlay y una alerta.",
            "_mn_anim": "Interacción con algunos componentes de la aplicación. Yo desarrollé los estilos y animación de los mismos en <i>css .less</i>.",
            "_mn_wprog": "El equipo de desarrollo trabajamos en Scrum con Atlassian JIRA. Realizé wireframes en Axure y una vez aprovados se diseñó la plataforma y todos los componentes con Adobe. Entre un programador y yo desarrollamos una guía de estilos y componentes interactiva con nuestros estilos en <i>css .less</i> (similar a la guía bootstrap) para que todo estubiera bien archivado y controlado. No lo puedo mostrar aquí por cuestiones de privacidad de la empresa.",
            "_mn_guide": "Para los iconos decidí crear una tipografía Glyphicon para que fuera más sencillo el uso de los mismos y porque vimos que muchos se repetirían y tendrían diferentes tamaños y colores. Fue estupendo! Los colores corporativos que ya disponia la marca, intenté no abusar de ellos y se decidió resaltar detalles de la plataforma con colores un poco más alegres.",
            "_mn_concl": "En <i>Mobiquity</i> todo fue un reto. No tenía conocimientos sobre beacons, me enfrentaba como único diseñador con un equipo de desarrolladores, un cliente clásico que no quería arriesgar... De todos modos, fue genial trabajar en el proyecto! cada día una aventura. Formamos una gran familia, trabajamos muy bien juntos y de forma profesional. Y sobretodo, aprendí muchísimo.",
        
            "_mosic_about_p": "<i>Mosic. MOve your muSIC.</i> Es una app que gamifica la música de los usuarios con sus movimientos. Anima al usuario a practicar deporte de una manera diferente, los usuarios escuchan su música y hacen movimientos en el momento correcto para ganar más puntos y ser los mejores <i>Mosics</i> con sus temas favoritos.",
            "_mosic_obj": "Quería experimentar con un esquema de color más oscuro y pensar en el diseño de <i>Watch</i> como aplicación nativa desde el principio. Interfaz de usuario simple, con detalles brillantes para hacer un diseño atractivo.",
            "_mosic_mobile": "En usabilidad se dice que los diseños oscuros son negativos porque pueden crear efecto espejo o ser pobre para personas con problemas visuales. He testeado la app con <i>Invision</i> en varios dispositivos y el resultado es positivo. La información resaltada hace que la app funcione en su totalidad y la oscuridad no sea un problema.",
            "_mosic_watch": "La app de <i>Watch</i> respeta al máximo las características de la app de <i>iPhone</i>. Muestra las funcionalidades necesarias, con un resultado exitoso en usabilidad.",
            "_mosic_promo": "Para la web promocional, quise hacer lo mismo: oscuridad y simplicidad.",
            "_mosic_wprog": "Wireframes en lápiz y diseñado con <i>Artboards de Photoshop</i>.",
            "_mosic_guide": "Negro y amarillo y la potente <i>San Francisco</i>, usando la familia de fuentes correcta para los distintos dispositivos.",
            "_mosic_concl": "He logrado un buen resultado en usabilidad con la interfaz oscura y estoy satisfecho con el resultado final.",
        
            "_ugh_about_p":"Con <i>Urban Garden Hero</i> cuidar tu huerto urbano será más sencillo y divertido! UGH es una herramienta que te permite gestionar tu huerto urbano, indicándote cuando es necesario realizar una tarea de mantenimiento: regar, cosechar, etc. Pero además de esto, por realizar las tareas indicadas, conseguirás <i>$emillas</i> con las que podrás personalizar a <i>Millo</i> (tu compañero de aventuras), el cual mejorará a medida que lo vaya haciendo tu huerto.",
            "_ugh_obj":"Este proyecto comenzó como una app para <i>Windows Phone</i>. Gané junto con dos amigos desarrolladores el primer premio de una hackatón de WP. Aquí se puede ver la adaptación que hice de la app para iPhone. Más limpia y atractiva.",
            "_ugh_mobile":"La idea es simple y la app también tenía que serlo al crear listados de tus cosechas y macetas. La app te va informando cuando tienes que regar o cosechar y al realizarlo vas ganando <i>$emillas</i> con las que va evolucionando un personaje llamado <i>Millo</i> que es tu avatar (diseñado por mí también). Si no realizas las tareas que te indica, el personaje pierde fuerza. De esta manera incentivas al usuario a seguir utilizando la app y mantener la salud de sus cultivos.",
            "_ugh_concl":"Con este proyecto aprendí a trabajar en proyectos a muy corto plazo, ya que lo desarrollamos durante el fin de semana de la hackatón. Buen trabajo en equipo y mucha confianza en nuestro proyecto nos hizo ganar este evento.",
        
            "_ably_about_p":"<i>Ably Care</i> es un sistema de monitorización para el cuidado de personas dependientes a través de su móvil. Los usuarios pueden realizar llamadas de emergencia, recibir alertas de posibles caídas, crear eventos para las personas dependientes y hacer una zona de alerta si la persona tiene algún problema de cognición o memoria.",
            "_ably_obj":"El propósito de este proyecto fue diseñar una interfaz sencilla y apacible. Colores suaves en general y destacados en las alertas. En las animaciones en la parte inferior de la página se pueden ver mejor las interacciones.",
            "_ably_anim":"Animación de interacciones y del onboarding de la app donde se aprecia la sencillez del proyecto. Sin embargo, actualmente el diseño podría mejorarse para alcanzar un mayor resultado y experiencia de usuario.",
        
            "_cc_about_p":"<i>Collect Club</i> es un lugar para coleccionistas. Una app social donde los usuarios pueden archivar sus colecciones, comprar, vender o intercambiar artículos.",
            "_cc_obj":"Quería experimentar con elementos cuadrados y realicé tanto los iconos como los componentes sin bordes redondeados. El resultado es sencillo pero también puede resultar un poco agresivo.",
        },
        "catalan": {
            "_logo": "CHUXUI",
            "_about": "Sobre mi",
            "_contact": "Contacte",
            "_projects": "Projectes",
            "_last": "Últims Projectes",
            "_social": "També sóc aquí",
            "_language": "Idioma",

            "_home": "Inici",
            "_previous": "anterior",
            "_next": "següent",
            "_about_p": "Sobre el Projecte",
            "_obj": "Objetiu",
            "_desktop": "App Escritori",
            "_mobile": "App Móbil",
            "_watch": "App Watch",
            "_anim": "Animacions",
            "_guides": "Guies de Disseny",
            "_wprog": "Progrés del Treball",
            "_concl": "Conclusió",
            "_onbo": "Animació de Inici",
            "_promo": "Lloc de Promoció",

            "_ab_title": "Hola!",
            "_ab_subtitle1": "El meu nom és Chris Jiménez i sóc el dissenyador dels projectes que poden veure en aquesta web.",
            "_ab_subtitle2": "Des de Barcelona, estic constantment aprenent tot sobre UX & UI i disposat a nous reptes. Potser podem crear algo meravellós junts.",
            "_ab_skills": "Habilitats",
            "_ab_skills1": "Pixel Perfection amb Sketch, Photoshop, Illustrator",
            "_ab_skills2": "Moure coses amb After Effects i Principle",
            "_ab_skills3": "Creació de prototips amb Invision o Axure",
            "_ab_skills4": "Hàbil amb HTML y CSS",
            "_ab_skills5": "Perfeccionista en Disseny de Marca",
            "_ab_skills6": "Coneixements actualitzats a les guies de disseny de Android i iOS",
            "_ab_skills7": "Investigació diària sobre tendències en UX & UI",
            "_ab_skills8": "Editor de video amb Premiere/FinalCut",
            "_ab_skills9": "Creació d'objectes amb 3DsMax i SketchUp",
            "_ab_skills10": "Coneixements bàsics en JS",
            "_ab_exp": "Experiència",
            "_ab_exp0": "Dissenyador Visual - InfoJobs-Schibsted Spain - 2016/Act",
            "_ab_exp1": "Dissenyador UX/UI - Freelance - 2015/2016",
            "_ab_exp2": "Dissenyador UX/UI - Mobiquity Networks - 2014/2015",
            "_ab_exp3": "Dissenyador UX/UI - Puck Solutions - 2014",
            "_ab_exp4": "Dissenyador UX/UI - Droids4Dev - 2012/2014",
            "_ab_exp5": "Dissenyador Visual i Professor de Disseny - Ajuntament de Terrassa - 2011/2012",
            "_ab_exp6": "MotionGrapher - gisela.com - 2010",
            "_ab_exp7": "Editor de Video - KB - 2009/2010",
            "_ab_exp8": "Dissenyador Gràfic - Milcap Media Group - 2007/2008",
            "_ab_exp9": "Tècnic Gràfic - Hewlett Packard - 2007",
            "_ab_exp10": "Dissenyador Gràfic - Studi Lettera - 2006",
            "_ab_know": "Coneixements",
            "_ab_know1": "Graduat Superior en Disseny Gràfic - EASC - 2002/2008",
            "_ab_know2": "Disseny Web HTML & CSS - Escola ESPAI - 2010/2011",
            "_ab_know3": "Disseny Web Grau A - Gniux University - 2014",
            "_ab_awa": "Premis",
            "_ab_awa1": "1a Posició a Megathon Windows - App: Urban Garden Hero - 2013",
            "_ab_awa2": "1a Posició a Concurs de Video - Baumann Fest - 2011",
            "_ab_hob": "Hobbies",
            "_ab_hob1": "A vegades necessito la relaxació de modelar formes amb argila",
            "_ab_hob2": "Altres vegades m'agrada tallar, mesurar i crear objectes en fusta",
            "_ab_hob3": "I més típics: dibuixar, cuinar, viatjar, esports...",

            "_caps_subtitle": "Botiga Online",
            "_h_subtitle": "Web d'Allotjament",
            "_wroups_subtitle": "Material Design App Social",
            "_mn_subtitle": "Plataforma de Publicitat Mòbil",
            "_mosic_subtitle": "iOS App Música & Esport",
            "_ugh_subtitle": "iOS App Plantes",
            "_ably_subtitle": "Android App Assistència",
            "_cc_subtitle": "Android App Social",

            "_caps_about_p": "<i>Caps</i> és una botiga online centrada en la compra de gorres. Una web senzilla que respecta l'espai en blanc per tal que l'experiència sigui més fàcil per a l'usuari en el moment de la compra d'un producte.",
            "_caps_obj": "L'app va se plantejada pensant primer en disseny mòbil i reduint les diferències entre l'escriptori i mòbils per als usuaris de les dues plataformes.",  
            "_caps_desktop": "La segona barra de navegació sota el carrusel de promoció, es fusiona amb la principal de navegació quan l'usuari fa scroll. Una zona de filtres simple, amb scroll independent i l'espai de contingut net i destacant el producte seleccionat d'una manera atractiva.",       
            "_caps_mobile": "Els usuaris només poden veure els productes en el contingut i els filtres i el menú es mostren en una barra lateral cada vegada que l'usuari vol accedir-hi. Tenir menys espai vol dir que necessitem centrar-nos més a mostrar el contingut principal, les gorres.",
            "_caps_concl": "Dissenyant <i>Caps</i> vaig prescindre de detalls excessius i vaig mantenir un disseny net en l'estructura de l'app d'una manera consistent per enfortir l'experiència d'usuari.",
            
            "_h_about_p": "<i>H</i> és una web d'allotjament senzilla que proporciona a l'usuari una experiència fàcil per llogar habitacions d'hotel. És totalment responsive i els usuaris poden veure la mateixa interfície en tots els seus dispositius.",
            "_h_obj": "Analitzant webs d'allotjament populars, vaig veure que tenen moltes diferències entre les seves plataformes. La idea del projecte és simplificar la forma en què els usuaris veuen la plataforma entre els seus dispositius i crear una forta UX amb una senzilla interfície d'usuari.",
            "_h_desktop": "Distribució simple dels elements a la web, disseny fresc amb molt espai en blanc, només ressaltant els botons i les fotos dels hotels. A la pàgina de detalls d'un hotel, els usuaris ja no necessiten la barra de filtres i la nova informació important són les habitacions de l'hotel disponibles i aquestes substitueixen els filtres.",
            "_h_mobile": "Els usuaris tindran la mateixa experiència que a la plataforma d'escriptori. Els mateixos elements amb la diferència que la vista dels filtres o les habitacions disponibles es visualitzen opcionalment. Al principi, els usuaris només han d'introduir la informació bàsica i començar a veure hotels.",
            "_h_wprog": "Vaig fer els esbossos i wireframes en paper. Vaig veure aquest projecte clarament des del principi i no volia perdre molt de temps en fer wireframes amb alguna aplicació. Més tard vaig dissenyar les pantalles, els components i icones amb Sketch App, utilitzant símbols i estils de text. Finalment he testejat la web mòbil amb Invision App.",
            "_h_guides": "M'agrada la família de tipografies Roboto (també SF) i quan vull simplificar un disseny, prefereixo fer servir una tipografia potent. Les icones són lineals i suau per no ressaltar més que el text a la plataforma. Les icones en la plataforma són d'ajuda visual, però no essencials.",
            "_h_concl": "Amb <i>H</i>  he après com simplificar un projecte que pots pensar en un primer moment no és possible a causa de la gran quantitat de dades que es mostren en altres plataformes similars, sense perdre la usabilitat.",

            "_wroups_about_p":"<i>Wroups</i> és una app social per trobar nous amics amb gustos similars. És una app d'enllaç a grups de WhatsApp.",
            "_wroups_obj":"Dissenyar una app senzilla i eficaç amb <i>Material Design</i> i fer servir els mateixos estils a la plataforma d'escriptori.",
            "_wroups_mobile":"Volia respectar fidelment les directrius de <i>Material Design</i> per a aquest projecte, però al mateix temps fer una aplicació amb personalitat sense perdre les guies de disseny. <i>Wroups</i> té una estructura senzilla i un disseny colorit que fa que sigui una aplicació atractiva i potent.",
            "_wroups_concl":"He actualitzat els meus coneixements en <i>Material Design</i> amb <i>Wroups</i> i vaig gaudir dissenyant l'app. Per al proper projecte amb <i>Material Design</i>, posaré més èmfasi en <i>Material Motion</i>.",
        
            "_mn_about_p": "<i>Mobiquity Networks</i> és un potent líder als EEUU en base a xarxa de localització mòbil de la publicitat i la interacció amb les aplicacions. Utilitzen un enfocament objectiu, basat en la ubicació per arribar al públic en els seus dispositius mòbils personals quan més importa. Per fer això, l'equip de desenvolupament a Barcelona vam haver de planificar i desenvolupar una plataforma per als clients de <i>Mobiquity</i>.",
            "_mn_obj": "L'empresa disposava d'una plataforma inestable i que necessitaven refer des de cero. Per això, van decidir també millorar l'experiència d'usuari per als seus clients. La meva feina va consistir en simplificar el disseny de la nova plataforma i millorar l'experiència d'usuari amb una interfície més simple i clara.",
            "_mn_analy": "Mostra de forma simple la informació que els clients necessiten dels seus usuaris. Volien que els filtres estiguessin sempre visibles i com sabíem que no hi hauria més filtres, es va decidir situar-los sota el Header per aprofitar l'amplada màxima per a les gràfiques.",
            "_mn_campa": "A través d'un llistat desplegable, es mostra la informació que els clients necessiten de les campanyes. Una taula senzilla però efectiva.",
            "_mn_newc": "Es va decidir realitzar un wizard per crear noves campanyes. Al principi pensàvem que haurien moltes més dades, de manera que es va decidir fer aquesta divisió dels apartats perquè els usuaris puguin guardar la informació pas a pas i fer més accessible el manteniment del contingut.",
            "_mn_apps": "Per a les aplicacions vam pensar que la millor solució era crear unes targetes expandibles al editar-les per tenir una ràpida i simple experiència d'usuari. Aquí també es poden veure un warning amb overlay i una alerta.",
            "_mn_anim": "Interacció amb alguns components de l'aplicació. Jo vaig desenvolupar els estils i la animació dels mateixos en <i>css .less</i>.",
            "_mn_wprog": "L'equip de desenvolupament vam treballar en Scrum amb Atlassian JIRA. Vaig realitzar wireframes en Axure i un cop aprovats es va dissenyar la plataforma i tots els components amb Adobe. Entre un programador i jo vam desenvolupar una guia d'estils i components interactiva amb els nostres estils en <i>css .less</i> (similar a la guia bootstrap) perquè tot estigués bé arxivat i controlat. No ho puc mostrar aquí per qüestions de privacitat de l'empresa.",
            "_mn_guide": "Per les icones vaig decidir crear una tipografia Glyphicon perquè fos més senzill l'ús dels mateixos i perquè vam veure que molts es repetirien i tindrien diferents mides i colors. Va ser fantàstic! Els colors corporatius que ja disposaba la marca, vaig intentar no abusar-ne i es va decidir ressaltar detalls de la plataforma amb colors una mica més alegres.",
            "_mn_concl": "En <i>Mobiquity</i> tot va ser un repte. No tenia coneixements sobre Beacons, m'enfrontava com a únic dissenyador amb un equip de desenvolupadors, un client clàssic que no volia arriscar... De totes maneres, va ser genial treballar en el projecte! cada día una aventura. Vam formar una gran família i vam treballar molt bé junts i de forma professional. I sobretot, vaig aprendre moltíssim.",
        
            "_mosic_about_p": "<i>Mosic. MOve your muSIC.</i> És una aplicació que gamifica la música dels usuaris amb els seus moviments. Animar a l'usuari a practicar esport d'una manera diferent. Els usuaris escolten la seva música i fan moviments en el moment correcte per guanyar més punts i ser els millors <i>Mosics</i> amb els seus temes favorits.",
            "_mosic_obj": "Volia experimentar amb un esquema de color més fosc i pensar en el disseny de <i>Watch</i> com a aplicació nativa des del principi. Interfície d'usuari senzilla, amb detalls brillants per fer un disseny atractiu.",
            "_mosic_mobile": "En usabilitat es diu que els dissenys foscos són negatius perquè poden crear efecte mirall o ser pobre per a persones amb problemes visuals. He testejat l'app amb <i>Invision</i> en diversos dispositius i el resultat és positiu. La informació ressaltada fa que l'app funcioni íntegrament i la foscor no sigui un problema.",
            "_mosic_watch": "L'app de <i>Watch</i> respecta al màxim les característiques de l'app d'<i>iPhone</i>. Mostra les funcionalitats necessàries amb un resultat exitós en usabilitat.",
            "_mosic_promo": "Per a la web promocional volia fer el mateix: foscor i senzillesa.",
            "_mosic_wprog": "Wireframes a llapis i dissenyat amb <i>Artboards de Photoshop</i>.",
            "_mosic_guide": "Negre i groc i la forta <i>San Francisco</i>, utilitzant la família tipogràfica correcta per als diferents dispositius.",
            "_mosic_concl": "He aconseguit un bon resultat en usabilitat amb la interfície fosca i estic satisfet amb el resultat final.",
        
            "_ugh_about_p":"Amb <i>Urban Garden Hero</i> cuidar el teu hort urbà serà més senzill i divertit! <i>UGH</i> és una eina que et permetrà gestionar el teu hort urbà, indicant quan cal fer una tasca de manteniment: regar, collir, etc. Però a més d'això, per realitzar les tasques indicades, aconseguiràs <i>$emillas</i> amb les que podràs personalitzar a <i>Millo</i> (el teu company d'aventures), el qual millorarà a mesura que ho vagi fent el teu hort.",
            "_ugh_obj":"Aquest projecte va començar sent una app per a <i>Windows Phone</i>. Vaig guanyar juntament amb dos amics desenvolupadors el primer premi d'una Hackaton de WP. Aquí es pot veure l'adaptació que vaig fer de l'app a <i>iPhone</i>. Més neta i atractiva.",
            "_ugh_mobile":"La idea és senzilla i l'app també havia de ser-ho en crear llistats de les teves collites i els seus testos. L'app et va informant quan has de regar o collir i al realitzar-ho vas guanyant <i>$emillas</i> amb les que va evolucionant un personatge anomenat <i>Millo</i> que és el teu avatar (dissenyat per mi també). Si no fas les tasques que t'indica, el personatge perd força. D'aquesta manera s'incentiva a l'usuari a continuar utilitzant l'app i mantenir la salut dels seus cultius.",
            "_ugh_concl":"Amb aquest projecte vaig aprendre a treballar en projectes a molt curt termini, ja que el desenvolupem durant el cap de setmana de la Hackaton. Bon treball en equip i molta confiança en el nostre projecte ens va fer guanyar aquest esdeveniment.",
        
            "_ably_about_p":"<i>Ably Care</i> és un sistema de monitorització per a la cura de persones dependents a través del seu mòbil. Els usuaris poden fer trucades d'emergència, rebre alertes de possibles caigudes, crear esdeveniments per a les persones dependents i fer una zona d'alerta si la persona té algun problema de cognició o memòria.",
            "_ably_obj":"El propòsit d'aquest projecte va ser dissenyar una interfície senzilla i afable. Colors suaus en general i destacats en les alertes. En les animacions a la part inferior de la pàgina es poden veure millor les interaccions.",
            "_ably_anim":"Animació d'interaccions i del onboarding de l'app on s'aprecia la senzillesa del projecte. Actualment, però, el disseny podria millorar per assolir un major resultat i experiència d'usuari.",
        
            "_cc_about_p":"<i>Collect Club</i> és un lloc per a col·leccionistes. App social on els usuaris poden arxivar les seves col·leccions, comprar, vendre o intercanviar articles.",
            "_cc_obj":"Volia experimentar amb elements quadrats i vaig realitzar tant les icones com els components sense vores arrodonides. El resultat és senzill però també pot resultar una mica agressiu.",
        }
    };

    // Function for swapping dictionaries
    set_lang = function (dictionary) {
        $("[data-translate]").html(function () {
            var key = $(this).data("translate");
            console.log('key: ' + key);
            if (dictionary.hasOwnProperty(key)) {
                return dictionary[key];
            }
        });
    };

    // Swap languages when menu changes
    $("#lang").on("change", function () {
        var language = $(this).val().toLowerCase();
        if (dictionary.hasOwnProperty(language)) {
            set_lang(dictionary[language]);
            saveLanguage(language);
        }
    });

    $('#lang').val(selectedLanguage);

    // Set initial language to English
    set_lang(dictionary[selectedLanguage]);

    function saveLanguage(cookieValue)
    {
        var sel = document.getElementById('set_lang');
        setCookie('lang', cookieValue, 365);
    }

    function setCookie(cookieName, cookieValue, nDays) {
        var today = new Date();
        var expire = new Date();

        if (nDays==null || nDays==0)
            nDays=1;

        expire.setTime(today.getTime() + 3600000*24*nDays);
        document.cookie = cookieName+"="+escape(cookieValue) + ";expires="+expire.toGMTString();
    }

    function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
});

