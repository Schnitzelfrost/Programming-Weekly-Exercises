/* 
 * 3. Tabs
 * 
 * TASK: Tab interfaces are commmon when we want selective disclosure of larger 
 * sections of information, often  some kind of logical sub-divison of the program.
 * Your task is to make a simple tabbed interface that consits of two parts:
 * 
 * 1. A "tab bar" of triggers. 
 * 2. A panel with the content of the open tab.
 * 
 * Clicking on a tigger in the tab bar should correspondingly show the 
 * correct content in the panel. Unlike the disclorsure and accordion widget
 * we have made before, the tab introduces a layer of indirection. It is not
 * really possible to keep the trigger and the panel in the same element. 
 * The trigger bar is displayed at all times, where as the panel is shifting.
 * In order to make this work, you will need to introduce some kind of indirect
 * linking between the tab and the panel. There are muntiple ways of doing this,
 * but I will show you how we can get and set custom HTML attributes.
 * 
 * This exercise is presented as a "fill in the blanks", but you could also 
 * try to do it from scratch if you feel adventurous.
 * 
 */


const tabTriggers = document.querySelector("#tab-triggers");
const tabPanels = document.querySelector("#tab-panels");


/**
 * 
 * @param {PointerEvent} event 
 */
function toggleTab(event) {
    const triggers = document.querySelectorAll(".tab-trigger");
    const clickedTrigger = event.target;

    for (const trigger of triggers) {
        if (trigger == clickedTrigger) {
            trigger.classList.add("trigger-focused");
        } else {
            trigger.classList.remove("trigger-focused");
        }
    }

    const panels = document.querySelectorAll(".tab-panel");
    const tabPanelID = clickedTrigger.getAttribute("tab-panel-id");

    for (const panel of panels) {
        if (panel.id === tabPanelID) {
            panel.classList.remove("hide");
        } else {
            panel.classList.add("hide");
        }
    }

}


/**
 * Create a panel, the part where the text goes, and hide it by default.
 * @param {string} text 
 * @returns Element
 */
function makePanel(text) {
    const panel = document.createElement("p");
    panel.classList.add("tab-panel", "hide");
    panel.append(text);

    return panel;
}


/**
 * Creates a tab trigger and adds it and the attached panel to the corresponding elements.
 * @param {number} panelID 
 * @param {string} label 
 * @param {Element} panel 
 * @param {boolean} isDefaultFocus 
 */
function makeTab(panelID, label, panel, isDefaultFocus) {
    const trigger = document.createElement("li");
    trigger.classList.add("tab-trigger");
    trigger.append(label);
    trigger.addEventListener("pointerdown", toggleTab);

    trigger.setAttribute("tab-panel-id", panelID);
    panel.id = panelID;

    if (isDefaultFocus) {
        trigger.classList.add("trigger-focused");
        panel.classList.remove("hide");
    }

    tabTriggers.append(trigger);
    tabPanels.append(panel);
}


makeTab(1,
    "First",
    makePanel("This is a tab with a panel. The tab itself is sometimes called the 'trigger.'"),
    true
);


makeTab(2,
    "Second",
    makePanel("This is another tab with a panel. A fish lives here 🐠"),
    false
);
