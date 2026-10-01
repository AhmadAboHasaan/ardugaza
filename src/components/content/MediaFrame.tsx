import Image from 'next/image';
import type { ApprovedImage, PendingIntegration } from '@/data/integrations';
import type { ReactNode } from 'react';
type Props = {
  image: PendingIntegration<ApprovedImage>;
  caption: string;
  fallback: ReactNode;
  className?: string;
  priority?: boolean;
};
export function MediaFrame({
  image,
  caption,
  fallback,
  className = '',
  priority = false,
}: Props) {
  return (
    <figure className={`media-frame ${className}`}>
      <div className="media-frame__surface">
        {image.status === 'ready' ? (
          <Image
            src={image.value.src}
            alt={image.value.alt}
            width={image.value.width}
            height={image.value.height}
            sizes="(max-width: 767px) 100vw, 50vw"
            priority={priority}
          />
        ) : (
          fallback
        )}
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
