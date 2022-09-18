module.exports = function (plop) {
    // create your generators here
    // Read more about templates at https://plopjs.com/
    plop.setGenerator("component", {
        description: "This is a react component template",
        prompts: [
            {
                type: "input",
                name: "componentName",
                message: "Component Name: "
            }
        ],
        actions: [
            {
                type: "add",
                path: "src/components/{{componentName}}/{{componentName}}.jsx",
                templateFile: "plop-templates/component.jsx.hbs"
            },
            {
                type: "add",
                path: "src/components/{{componentName}}/{{componentName}}.scss",
                templateFile: "plop-templates/component.scss.hbs"

            }
        ]
    });

    plop.setGenerator("page", {
        description: "This is a react folder template",
        prompts: [
            {
                type: "input",
                name: "pageName",
                message: "Page name: "
            }
        ],
        actions: [
            {
                type: "add",
                path: "src/pages/{{pageName}}/{{pageName}}.page.jsx",
                templateFile: "plop-templates/page.jsx.hbs"
            },
            {
                type: "add",
                path: "src/pages/{{pageName}}/{{pageName}}.page.scss",
                templateFile: "plop-templates/page.scss.hbs"

            }
        ]
    })
};