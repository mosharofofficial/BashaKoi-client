import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomSelect from "./CustomSelect";
import Button from "./Button";

const FloatingSearch = () => {
  const divisions = [
    "Dhaka",
    "Chittagong",
    "Rajshahi",
    "Khulna",
    "Barishal",
    "Sylhet",
    "Rangpur",
  ];

  return (
    <Card className="backdrop-blur-2xl sm:max-w-[500px] bg-transparent text-white sm:absolute sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 sm:translate-y-1/3 z-[1] sm:w-[70%] rounded-none sm:rounded-2xl border-x-0 sm:border-x">
      <CardHeader className="">
        <CardTitle>Search For Flats</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3">
        <CustomSelect field="Division" items={divisions} />
        <CustomSelect field="Division" items={divisions} />
      </CardContent>
      <CardFooter>
        <CardAction>
          <Button> Search</Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
};
//#458389
export default FloatingSearch;
