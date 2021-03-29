import CreatePod from "./media_class.js";
console.log("maneger running");

export const createMultiPods = (_ar) => {
  _ar.map((item) => {
    let pod = new CreatePod("parent", item.image, 200);

    pod.render();
  });
};
