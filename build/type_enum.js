"use strict";
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#FFFFFF";
    DesignColors["black"] = "#000000";
})(DesignColors || (DesignColors = {}));
console.log(DesignColors.black);
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["ADMIN"] = 0] = "ADMIN";
    StatusPermission[StatusPermission["USER"] = 1] = "USER";
    StatusPermission[StatusPermission["SUPPORT"] = 2] = "SUPPORT";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission.SUPPORT);
if (StatusPermission.SUPPORT === 2) {
    console.log("Acesso Liberado!");
}
else {
    console.log("Acesso Negado!");
}
