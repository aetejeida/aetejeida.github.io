var app = angular.module("angularModule", []);
app.controller("changeTextController", ["$scope", function ($scope) {

    $scope.lenguaje = {};
    $scope.lenguaje.resumen = [];
    $scope.btnTitle = "";
 
    $scope.a = {
        experience: [
            {
                position: "Full Stack Developer",
                nameCorporation: "TIMSA",
                linkCorporation: "https://timsa.biz",
                dateInit: "Mayo 2015",
                dateFinish: "Abril 2017",
                comment: "Encargado de llevar a cabo actualizaciones de los sistemas y mantenimientos, crear nuevos procesos y renovar los antiguos"
            },
            {
                position: "Sofware Developer Jr",
                nameCorporation: "TIMSA",
                linkCorporation: "https://timsa.biz",
                dateInit: "Abril 2014",
                dateFinish: "Mayo 2015",
                comment: "Hakuna matata"
            }
        ]

    };

    $scope.changeLenguaje = function () {
        if ($scope.lenguaje.Spanish) {
            $scope.changeLenguajeToEnglish();
        }
        else {
            $scope.changeLenguajeToSpanish();
        }
    }

    $scope.changeLenguajeToSpanish = function () {
        $scope.lenguaje.Spanish = true;
        $scope.lenguaje.principalPosition = "Desarrollador de Software";
        $scope.btnTitle = "English";
        $scope.lenguaje.titleResumen = "Resumen";
        $scope.lenguaje.titleExpecience = "Experiencia";
        $scope.lenguaje.resumen = [];
        $scope.lenguaje.resumen.push("Hola, soy Angel Tejeida, desarrollador de software de diferentes plataformas, actualmente trabajo y resido en Torreón, Coahuila Mexico, especializado en aplicaciones Android.");
        $scope.lenguaje.resumen.push("LLevo 2 años como desarrollador usando .Net con C# como lenguaje de programación empezando con .Net 3.5 y avanzando a 4.5 con MVC. También integrando Telerik data Access para crear un ORM, de esta manera hace más fácil las consultas a la base de datos, en lado del cliente me he especializado en el frameworks MaterializeCSS para el diseño del lado del cliente, AngularJS para crear la lógica del lado del cliente, en el lado de aplicaciones móviles he creando aplicaciones nativas e híbridas, integrando ORM’s, y consumiendo diversas RestApis tanto propias como de terceros.");
        $scope.lenguaje.resumen.push("Soy una persona alegre, comprometida, buscando soluciones de los problemas y en caso de que no existan trato de buscar la solucion mas fiable, proactivo y responsable, en mis tiempos libres suelo actualizarse y buscar nuevas cosas de hacer las cosas, me encanta viajar y llegar a lugares nuevos para mi");
        $scope.lenguaje.position = "Full Stack Developer";
        $scope.lenguaje.linkJobActuality = "https://timsa.biz";
        $scope.lenguaje.nameJobActuality = "TIMSA";
        $scope.lenguaje.timeWorking = "Mayo 2015 - Abril 2017";
    }


    $scope.changeLenguajeToEnglish = function () {
        $scope.lenguaje.Spanish = false;
        $scope.lenguaje.principalPosition = "Software Developer";
        $scope.btnTitle = "Español";
        $scope.lenguaje.titleResumen = "Summary";
        $scope.lenguaje.titleExpecience = "Experience";
        $scope.lenguaje.resumen = [];
        $scope.lenguaje.resumen.push("Hi!, I Angel Tejeida, software developer for various platforms, I am currently working and I am living in Torreón, Coahuila Mexico, especializado en aplicaciones Android");
    }


}]);
