export default function Footer(): JSX.Element {
    const footerYear: number = new Date().getUTCFullYear();
    return (
        <div className="mb-7">
            <p className="text-zinc-500 text-[7px] text-center">Copyright &copy; {footerYear}</p>
        </div>
    )
}