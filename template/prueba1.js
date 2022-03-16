window.onload = function () {
  Prueba1();
};

function Prueba1() {
  console.log(" -----   ---");
  let widgetOptions = {
    "pc-environment": "mypurecloud.de",
    //"customer-avatar-url": "<CUSTOMER_AVATAR_URL>",
    "pc-queue": "4a706e91-e8ea-4dc3-94bf-4445b0e42e32",
    //"registration-type": "<REGISTRATION_TYPE>",
    "dark-mode": "<DARK_MODE>",
    "pc-organization-id": "6e6d5224-1909-48fa-a982-66cef3fa4c08",
    "pc-deployment-id": "6820a6a6-3755-4152-8d3f-53e7e8d2bedc",
  };

  (async () => {
    await customElements.whenDefined("app-auvious-widget");
    showWidget();
  })();

  function showWidget() {
    // create our widget
    const widget = document.createElement("app-auvious-widget");

    // get all the widget options and pass it to our widget.
    Object.keys(widgetOptions).forEach((key) => {
      if (!!widgetOptions[key]) {
        const value = widgetOptions[key];
        widget.setAttribute(key, value);
      }
    });

    // add the newly created widget to the body.
    document.body.appendChild(widget);
  }
}
