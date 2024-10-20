import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { passions } from "@/lib/variables";

const PassionSelector = () => {
  const realPassions = Object.keys(passions);
  return (
    <Select name="passion">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Passion" />
      </SelectTrigger>
      <SelectContent>
        {realPassions.map((passion) => (
          <SelectItem value={passion} key={passion}>
            {passions[`${passion}`]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default PassionSelector;
