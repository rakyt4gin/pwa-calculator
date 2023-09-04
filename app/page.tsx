import Grid from "./components/calc/Grid";
import Result from "./components/calc/Result";

export default async function Home() {
    return (
        <main className="w-[100vw] h-[100vh] overflow-hidden flex justify-center items-center">
            <div className="w-[40vw] flex flex-col bg-grey">
                <Result />
                <Grid />
            </div>
        </main>
    );
}
