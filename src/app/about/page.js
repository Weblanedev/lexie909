import Services from "@/components/Services";
import CoreFeatures from "@/components/CoreFeatures";
import Work from "@/components/Work";

const page = () => {
    return (
        <div className="pt-[150px] flex flex-col gap-y-[100px]">   
            <Services />
            <Work />
            <CoreFeatures />
        </div>
    )
}

export default page