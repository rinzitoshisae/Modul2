import Card from "@/components/card";
export default function LearnComponentPage() {
    return (
        <div>
            <div className="h-screen bg-cyan-500">
            <div className="flex justify-center p-10 gap-8">
                    <Card imageSource="https://fastly.picsum.photos/id/318/200/200.jpg?hmac=bXfpcSpOySqXMIev1AISKO15vvxPgau4JEA36kuhG1Y"
                        name="Yahya">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quibusdam?
                    </Card>

                    <Card imageSource="https://fastly.picsum.photos/id/318/200/200.jpg?hmac=bXfpcSpOySqXMIev1AISKO15vvxPgau4JEA36kuhG1Y"
                        name="Fahmi">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quibusdam?
                    </Card>

                    <Card imageSource="https://fastly.picsum.photos/id/318/200/200.jpg?hmac=bXfpcSpOySqXMIev1AISKO15vvxPgau4JEA36kuhG1Y"
                        name="Abdillah">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quibusdam?
                    </Card>
            </div>
        </div>
        </div>
    );
}

