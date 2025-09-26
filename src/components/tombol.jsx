export default function Tombol({ className = "", Link="#"}) {
    return <a href={Link} className={`text-red- ${className}`}>Hubungi Saya</a>
}