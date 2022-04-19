import { addresses } from "./search";

export default function(val: string) {
  return addresses.filter(i => i.indexOf(val) !== -1);
}
