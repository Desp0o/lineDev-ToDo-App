import i18next from "i18next";
import languagedetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(languagedetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          myDay: "My Day",
          importants: "Importants",
          dashboard: "Dashboard",
          addTask: "Add a task",
          importnace: "Important",
          complete: "Complete",
          edit: "Edit",
          delete: "Delete",
          search: "Search",
          inProgress:"In Progress",
          taskByStatus:"Task by Status",
          AllTasks:"All Tasks",
          done:"Done",
          stuck:"Stuck"
        },
      },
      ge: {
        translation: {
          myDay: "მთავარი",
          importants: "მნიშვნელოვანი",
          dashboard: "დეშბორდი",
          addTask: "დაამატე ტასკი",
          importnace: "მნიშვნელოვანი",
          complete: "დასრულება",
          edit: "ჩასწორება",
          delete: "წაშლა",
          search: "ძებნა",
          inProgress:"მიმდინარე",
          taskByStatus:"ტასკები ჩარტი",
          AllTasks:"ყველა ტასკი",
          done:"დასრულებული",
          stuck:"გაჭედილი"
        },
      },
    },
  });

export default i18next;
