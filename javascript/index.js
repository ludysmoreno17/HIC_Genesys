/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
  document.getElementById("deviceready").classList.add("ready");
  permiso();
}

function AuviousWidget() {
  console.log("AuviousWidget :: Fin");
  let widgetOptions = {
    "pc-environment": "mypurecloud.de",
    //"customer-avatar-url": "<CUSTOMER_AVATAR_URL>",
    "pc-queue": "4a706e91-e8ea-4dc3-94bf-4445b0e42e32",
    //"registration-type": "<REGISTRATION_TYPE>",
    "dark-mode": "<DARK_MODE>",
    "pc-organization-id": "6e6d5224-1909-48fa-a982-66cef3fa4c08",
    "pc-deployment-id": "6820a6a6-3755-4152-8d3f-53e7e8d2bedc",
    locale: "es-CO",
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
    console.log("showWidget :: Fin");
  }
}

function permiso() {
  var permissions = cordova.plugins.permissions;
  var list = [
    permissions.INTERNET,
    permissions.NETWORK_ACCESS,
    permissions.ACCESS_NETWORK_STATE,
    permissions.CAMERA,
    permissions.RECORD_AUDIO,
    permissions.CAPTURE_AUDIO_OUTPUT,
    permissions.MODIFY_AUDIO_SETTINGS,
  ];
  permissions.requestPermissions(list, success, error);

  function error() {
    console.warn("permissions are NOT turned on");
  }

  function success(status) {
    if (!status.hasPermission) error();
    console.log("permissions OK");
    const btnWidget = document.getElementById("btnWidget");
    btnWidget.className = "visible";
  }
}
