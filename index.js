import Button from "./src/button";
import ButtonGroup from "./src/button-group";
import Icon from "./src/icon";

export { Button, ButtonGroup, Icon };

function getSum(arr, num) {
  for (let i = 0; i <= arr.length; i++) {
    for (let n = 0; n <= arr.length; n++) {
      if (i !== n && arr[i] + arr[n] === sum) {
        return true;
      } else {
        return false;
      }
    }
  }
}
