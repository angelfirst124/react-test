import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Is Your Plan": "Is Your Plan",
      "My profile": "My profile",
      "members": "members",
      "logout": "logout",
      "London Python Sprints": "London Python Sprints",
      "PyData Mallorca": "PyData Mallorca",
      "Python Norte": "Python Norte",
      "london-python-sprints": "london-python-sprints",
      "London, UK": "London, UK",
      "Mallorca, Spain": "Mallorca, Spain",
      "Norte de Argentina": "Norte de Argentina",
      "python-norte": "python-norte",
      "My communities": "My communities",
      "My events": "My events",
      "Invite friends": "Invite friends",
      "Light Mode": "Light Mode",
      "Change language": "Change language",
      "Contact support": "Contact support",
      "English": "English",
      "HebrewCre": "HebrewCre",
      "DashBoard": "DashBoard"
    },
  },
  de: {
    translation: {
      "Is Your Plan": "Est votre plan",
      "My profile": "Mon profil",
      "members": "membres",
      "logout": "Se déconnecter",
      "London Python Sprints": "Sprints Python de Londres",
      "PyData Mallorca": "PyData Majorque",
      "Python Norte": "Python Nord",
      "london-python-sprints": "londres-python-sprints",
      "London, UK": "Londres, Royaume-Uni",
      "Mallorca, Spain": "Majorque, Espagne",
      "Norte de Argentina": "Nord de l'Argentine",
      "python-norte": "python-nord",
      "My communities": "Mes communautés",
      "My events": "Mes événements",
      "Invite friends": "Inviter des amis",
      "Light Mode": "Mode lumière",
      "Change language": "Changer de langue",
      "Contact support": "Contactez le support",
      "English": "Englisch",
      "HebrewCre": "HebrewCre",
      "Dashboard": "Dashboard"
    },
  },
};
//Python Norte
i18n.use(reactI18nextModule).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
