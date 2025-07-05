import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CustomSelect = ({ items, field }: { items: string[], field: string }) => {
  return (
    <Select>
      <SelectTrigger className=" w-[180px] data-[placeholder]:text-white [&_svg:not([class*='text-'])]:text-white">
        <SelectValue placeholder={field} className="" />
      </SelectTrigger>
      <SelectContent className="  bg-[#153045] text-white">
        {items.map((item) => {
          return (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
