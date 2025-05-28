import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title={"Book"} styles="rounded-md rounded-lg rounded-full rounded-sm" />
    </div>
  )
}
export default Landing