type Props = {
    src? : string,
    alt? : string,
    className? : string,
    loading : "eager" | "lazy" | undefined
}

export default function Media({ src, alt, className, loading=undefined }: Props) {
    if (!src) return null;

    const media = src.split(".").pop()?.toLocaleLowerCase();

    const imageTypes = ["webp", "png", "jpg", "jpeg", "svg", "gif", "avif", "bmp"];

    if (media && imageTypes.includes(media)) {
        return (
            <img
                src={src}
                alt={alt}
                className={className}
                loading={loading}
                decoding="async"
            />
        )
    }

    if (media === "mp4") {
        return (
            <video
                src={src}
                className={className}
                preload="auto"
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
            />
        )
    }

    return null
}
