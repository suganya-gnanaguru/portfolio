export default function Header (){
    return (
        <section className="flex darkTheme font-semibold">
            <div className="w-1/2">
                <a href="#about">Suganya Gnanaguru</a>
            </div>
            <div className="w-1/2">
                <nav className="text-right">
                    <ul className="flex  gap-10 right-10 absolute">
                        <li><a href="#Introduction">About Me</a></li>
                        <li><a href="#Projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </section>);
}