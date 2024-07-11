gdjs.jobsCode = {};
gdjs.jobsCode.localVariables = [];
gdjs.jobsCode.forEachCount0_2 = 0;

gdjs.jobsCode.forEachCount1_2 = 0;

gdjs.jobsCode.forEachCount2_2 = 0;

gdjs.jobsCode.forEachIndex2 = 0;

gdjs.jobsCode.forEachObjects2 = [];

gdjs.jobsCode.forEachTemporary2 = null;

gdjs.jobsCode.forEachTotalCount2 = 0;

gdjs.jobsCode.GDbackgroundObjects1= [];
gdjs.jobsCode.GDbackgroundObjects2= [];
gdjs.jobsCode.GDGetJobButtonObjects1= [];
gdjs.jobsCode.GDGetJobButtonObjects2= [];
gdjs.jobsCode.GDlumbermanIconObjects1= [];
gdjs.jobsCode.GDlumbermanIconObjects2= [];
gdjs.jobsCode.GDLumbermanJobTXTObjects1= [];
gdjs.jobsCode.GDLumbermanJobTXTObjects2= [];
gdjs.jobsCode.GDMyLevelTXTObjects1= [];
gdjs.jobsCode.GDMyLevelTXTObjects2= [];
gdjs.jobsCode.GDBackButtonObjects1= [];
gdjs.jobsCode.GDBackButtonObjects2= [];
gdjs.jobsCode.GDUIblockObjects1= [];
gdjs.jobsCode.GDUIblockObjects2= [];


gdjs.jobsCode.eventsList0 = function(runtimeScene) {

};gdjs.jobsCode.eventsList1 = function(runtimeScene) {

};gdjs.jobsCode.eventsList2 = function(runtimeScene) {

};gdjs.jobsCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.jobsCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.jobsCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.jobsCode.GDBackButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.jobsCode.GDBackButtonObjects1[k] = gdjs.jobsCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.jobsCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Безымянная сцена", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GetJobButton"), gdjs.jobsCode.GDGetJobButtonObjects1);

for (gdjs.jobsCode.forEachIndex2 = 0;gdjs.jobsCode.forEachIndex2 < gdjs.jobsCode.GDGetJobButtonObjects1.length;++gdjs.jobsCode.forEachIndex2) {
gdjs.jobsCode.GDGetJobButtonObjects2.length = 0;


gdjs.jobsCode.forEachTemporary2 = gdjs.jobsCode.GDGetJobButtonObjects1[gdjs.jobsCode.forEachIndex2];
gdjs.jobsCode.GDGetJobButtonObjects2.push(gdjs.jobsCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.jobsCode.GDGetJobButtonObjects2.length;i<l;++i) {
    if ( gdjs.jobsCode.GDGetJobButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.jobsCode.GDGetJobButtonObjects2[k] = gdjs.jobsCode.GDGetJobButtonObjects2[i];
        ++k;
    }
}
gdjs.jobsCode.GDGetJobButtonObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.jobsCode.GDGetJobButtonObjects2.length ;i < len;++i) {
    gdjs.jobsCode.GDGetJobButtonObjects2[i].SetLabelText("Work", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GetJobButton"), gdjs.jobsCode.GDGetJobButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) >= 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.jobsCode.GDGetJobButtonObjects1.length;i<l;++i) {
    if ( gdjs.jobsCode.GDGetJobButtonObjects1[i].getAABBBottom() == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) ) {
        isConditionTrue_0 = true;
        gdjs.jobsCode.GDGetJobButtonObjects1[k] = gdjs.jobsCode.GDGetJobButtonObjects1[i];
        ++k;
    }
}
gdjs.jobsCode.GDGetJobButtonObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.jobsCode.GDGetJobButtonObjects1 */
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func(runtimeScene, 0, "", "vertical", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.camera.clampCamera(runtimeScene, 720, 0, 0, (( gdjs.jobsCode.GDGetJobButtonObjects1.length === 0 ) ? 0 :gdjs.jobsCode.GDGetJobButtonObjects1[0].getAABBBottom()) + 100, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GetJobButton"), gdjs.jobsCode.GDGetJobButtonObjects1);

for (gdjs.jobsCode.forEachIndex2 = 0;gdjs.jobsCode.forEachIndex2 < gdjs.jobsCode.GDGetJobButtonObjects1.length;++gdjs.jobsCode.forEachIndex2) {
gdjs.jobsCode.GDGetJobButtonObjects2.length = 0;


gdjs.jobsCode.forEachTemporary2 = gdjs.jobsCode.GDGetJobButtonObjects1[gdjs.jobsCode.forEachIndex2];
gdjs.jobsCode.GDGetJobButtonObjects2.push(gdjs.jobsCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) < (( gdjs.jobsCode.GDGetJobButtonObjects2.length === 0 ) ? 0 :gdjs.jobsCode.GDGetJobButtonObjects2[0].getAABBBottom()));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber((( gdjs.jobsCode.GDGetJobButtonObjects2.length === 0 ) ? 0 :gdjs.jobsCode.GDGetJobButtonObjects2[0].getAABBBottom()));
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GetJobButton"), gdjs.jobsCode.GDGetJobButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("LumbermanJobTXT"), gdjs.jobsCode.GDLumbermanJobTXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("lumbermanIcon"), gdjs.jobsCode.GDlumbermanIconObjects1);

gdjs.jobsCode.forEachTotalCount2 = 0;
gdjs.jobsCode.forEachObjects2.length = 0;
gdjs.jobsCode.forEachCount0_2 = gdjs.jobsCode.GDGetJobButtonObjects1.length;
gdjs.jobsCode.forEachTotalCount2 += gdjs.jobsCode.forEachCount0_2;
gdjs.jobsCode.forEachObjects2.push.apply(gdjs.jobsCode.forEachObjects2,gdjs.jobsCode.GDGetJobButtonObjects1);
gdjs.jobsCode.forEachCount1_2 = gdjs.jobsCode.GDLumbermanJobTXTObjects1.length;
gdjs.jobsCode.forEachTotalCount2 += gdjs.jobsCode.forEachCount1_2;
gdjs.jobsCode.forEachObjects2.push.apply(gdjs.jobsCode.forEachObjects2,gdjs.jobsCode.GDLumbermanJobTXTObjects1);
gdjs.jobsCode.forEachCount2_2 = gdjs.jobsCode.GDlumbermanIconObjects1.length;
gdjs.jobsCode.forEachTotalCount2 += gdjs.jobsCode.forEachCount2_2;
gdjs.jobsCode.forEachObjects2.push.apply(gdjs.jobsCode.forEachObjects2,gdjs.jobsCode.GDlumbermanIconObjects1);
for (gdjs.jobsCode.forEachIndex2 = 0;gdjs.jobsCode.forEachIndex2 < gdjs.jobsCode.forEachTotalCount2;++gdjs.jobsCode.forEachIndex2) {
gdjs.jobsCode.GDGetJobButtonObjects2.length = 0;

gdjs.jobsCode.GDLumbermanJobTXTObjects2.length = 0;

gdjs.jobsCode.GDlumbermanIconObjects2.length = 0;


if (gdjs.jobsCode.forEachIndex2 < gdjs.jobsCode.forEachCount0_2) {
    gdjs.jobsCode.GDGetJobButtonObjects2.push(gdjs.jobsCode.forEachObjects2[gdjs.jobsCode.forEachIndex2]);
}
else if (gdjs.jobsCode.forEachIndex2 < gdjs.jobsCode.forEachCount0_2+gdjs.jobsCode.forEachCount1_2) {
    gdjs.jobsCode.GDLumbermanJobTXTObjects2.push(gdjs.jobsCode.forEachObjects2[gdjs.jobsCode.forEachIndex2]);
}
else if (gdjs.jobsCode.forEachIndex2 < gdjs.jobsCode.forEachCount0_2+gdjs.jobsCode.forEachCount1_2+gdjs.jobsCode.forEachCount2_2) {
    gdjs.jobsCode.GDlumbermanIconObjects2.push(gdjs.jobsCode.forEachObjects2[gdjs.jobsCode.forEachIndex2]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) > (( gdjs.jobsCode.GDlumbermanIconObjects2.length === 0 ) ? (( gdjs.jobsCode.GDLumbermanJobTXTObjects2.length === 0 ) ? (( gdjs.jobsCode.GDGetJobButtonObjects2.length === 0 ) ? 0 :gdjs.jobsCode.GDGetJobButtonObjects2[0].getY()) :gdjs.jobsCode.GDLumbermanJobTXTObjects2[0].getY()) :gdjs.jobsCode.GDlumbermanIconObjects2[0].getY()));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber((( gdjs.jobsCode.GDlumbermanIconObjects2.length === 0 ) ? (( gdjs.jobsCode.GDLumbermanJobTXTObjects2.length === 0 ) ? (( gdjs.jobsCode.GDGetJobButtonObjects2.length === 0 ) ? 0 :gdjs.jobsCode.GDGetJobButtonObjects2[0].getY()) :gdjs.jobsCode.GDLumbermanJobTXTObjects2[0].getY()) :gdjs.jobsCode.GDlumbermanIconObjects2[0].getY()));
}}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.jobsCode.GDbackgroundObjects1);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "LIST", 0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)), 5);
}{for(var i = 0, len = gdjs.jobsCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.jobsCode.GDbackgroundObjects1[i].getBehavior("Scale").setScaleY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) + 1000);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GetJobButton"), gdjs.jobsCode.GDGetJobButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("LumbermanJobTXT"), gdjs.jobsCode.GDLumbermanJobTXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("lumbermanIcon"), gdjs.jobsCode.GDlumbermanIconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.jobsCode.GDGetJobButtonObjects1.length;i<l;++i) {
    if ( gdjs.jobsCode.GDGetJobButtonObjects1[i].getAABBBottom() == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) ) {
        isConditionTrue_0 = true;
        gdjs.jobsCode.GDGetJobButtonObjects1[k] = gdjs.jobsCode.GDGetJobButtonObjects1[i];
        ++k;
    }
}
gdjs.jobsCode.GDGetJobButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.jobsCode.GDLumbermanJobTXTObjects1.length;i<l;++i) {
    if ( gdjs.jobsCode.GDLumbermanJobTXTObjects1[i].getAABBBottom() == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) ) {
        isConditionTrue_0 = true;
        gdjs.jobsCode.GDLumbermanJobTXTObjects1[k] = gdjs.jobsCode.GDLumbermanJobTXTObjects1[i];
        ++k;
    }
}
gdjs.jobsCode.GDLumbermanJobTXTObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.jobsCode.GDlumbermanIconObjects1.length;i<l;++i) {
    if ( gdjs.jobsCode.GDlumbermanIconObjects1[i].getAABBBottom() == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) ) {
        isConditionTrue_0 = true;
        gdjs.jobsCode.GDlumbermanIconObjects1[k] = gdjs.jobsCode.GDlumbermanIconObjects1[i];
        ++k;
    }
}
gdjs.jobsCode.GDlumbermanIconObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
}
if (isConditionTrue_0) {
/* Reuse gdjs.jobsCode.GDGetJobButtonObjects1 */
/* Reuse gdjs.jobsCode.GDLumbermanJobTXTObjects1 */
/* Reuse gdjs.jobsCode.GDlumbermanIconObjects1 */
{for(var i = 0, len = gdjs.jobsCode.GDGetJobButtonObjects1.length ;i < len;++i) {
    gdjs.jobsCode.GDGetJobButtonObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.jobsCode.GDLumbermanJobTXTObjects1.length ;i < len;++i) {
    gdjs.jobsCode.GDLumbermanJobTXTObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.jobsCode.GDlumbermanIconObjects1.length ;i < len;++i) {
    gdjs.jobsCode.GDlumbermanIconObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.jobsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.jobsCode.GDbackgroundObjects1.length = 0;
gdjs.jobsCode.GDbackgroundObjects2.length = 0;
gdjs.jobsCode.GDGetJobButtonObjects1.length = 0;
gdjs.jobsCode.GDGetJobButtonObjects2.length = 0;
gdjs.jobsCode.GDlumbermanIconObjects1.length = 0;
gdjs.jobsCode.GDlumbermanIconObjects2.length = 0;
gdjs.jobsCode.GDLumbermanJobTXTObjects1.length = 0;
gdjs.jobsCode.GDLumbermanJobTXTObjects2.length = 0;
gdjs.jobsCode.GDMyLevelTXTObjects1.length = 0;
gdjs.jobsCode.GDMyLevelTXTObjects2.length = 0;
gdjs.jobsCode.GDBackButtonObjects1.length = 0;
gdjs.jobsCode.GDBackButtonObjects2.length = 0;
gdjs.jobsCode.GDUIblockObjects1.length = 0;
gdjs.jobsCode.GDUIblockObjects2.length = 0;

gdjs.jobsCode.eventsList3(runtimeScene);

return;

}

gdjs['jobsCode'] = gdjs.jobsCode;
