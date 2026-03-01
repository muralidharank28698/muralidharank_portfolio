import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  memo,
  ReactNode,
  CSSProperties,
} from "react";
import "./LogoLoop.css";

/* ================= TYPES ================= */

export interface LogoNodeItem {
  node: ReactNode;
  title?: string;
  href?: string;
}

export interface LogoImageItem {
  src: string;
  alt?: string;
  title?: string;
  width?: number;
  height?: number;
  href?: string;
}

export type LogoItem = LogoNodeItem | LogoImageItem;

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right";
  width?: number | string;
  gap?: number;
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
  className?: string;
  style?: CSSProperties;
}

/* ================= COMPONENT ================= */

const LogoLoopComponent = ({
  logos,
  speed = 10,
  direction = "left",
  width = "100%",
  gap = 38,
  pauseOnHover = true,
  scaleOnHover = false,
  className,
  style,
}: LogoLoopProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const seqRef = useRef<HTMLUListElement | null>(null);

  const positionRef = useRef(0);
  const animationRef = useRef<number>();

  const [seqWidth, setSeqWidth] = useState(0);
  const [copyCount, setCopyCount] = useState(2);
  const [isHovered, setIsHovered] = useState(false);

  /* ================= Measure Width ================= */

  useEffect(() => {
    if (!seqRef.current || !containerRef.current) return;

    const sequenceWidth = seqRef.current.offsetWidth;
    const containerWidth = containerRef.current.offsetWidth;

    setSeqWidth(sequenceWidth);

    const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + 1;

    setCopyCount(Math.max(2, copiesNeeded));
  }, [logos]);

  /* ================= Animation ================= */

  useEffect(() => {
    if (!trackRef.current) return;

    const velocity = direction === "left" ? -speed : speed;

    const animate = () => {
      if (!trackRef.current) return;

      if (!(pauseOnHover && isHovered)) {
        positionRef.current += velocity * 0.016;

        if (direction === "left") {
          if (positionRef.current <= -seqWidth) {
            positionRef.current += seqWidth;
          }
        } else {
          if (positionRef.current >= 0) {
            positionRef.current -= seqWidth;
          }
        }

        trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [seqWidth, speed, direction, pauseOnHover, isHovered]);

  /* ================= Render Item ================= */

  const renderLogoItem = useCallback((item: LogoItem, key: string) => {
    const isNodeItem = "node" in item;

    const content = isNodeItem ? (
      item.node
    ) : (
      <img
        src={item.src}
        alt={item.alt ?? ""}
        width={item.width}
        height={item.height}
        draggable={false}
      />
    );

    return (
      <li className="logoloop__item" key={key}>
        {"href" in item && item.href ? (
          <p>
            {content}
          </p>
        ) : (
          content
        )}
      </li>

      // <li className="logoloop__item" key={key}>
      //   <div className="flex relative items-center justify-center w-full shadow-sm border border-transparent hover:border-[0.5px] hover:border-[rgb(87,213,255)] transition-all duration-500 p-2 rounded-lg">
      //     {content}
      //   </div>
      //   {("href" in item && item.href) && (
      //     <a href={item.href} target="_blank" rel="noreferrer" className="absolute inset-0 rounded-lg" />
      //   )}
      // </li>
    );
  }, []);

  /* ================= Duplicate Lists ================= */

  const logoLists = useMemo(
    () =>
      Array.from({ length: copyCount }, (_, copyIndex) => (
        <ul
          className="logoloop__list"
          key={`copy-${copyIndex}`}
          ref={copyIndex === 0 ? seqRef : undefined}
          style={{ gap }}
        >
          {logos.map((item, index) =>
            renderLogoItem(item, `${copyIndex}-${index}`),
          )}
        </ul>
      )),
    [copyCount, logos, renderLogoItem, gap],
  );

  return (
    <div
      ref={containerRef}
      className={`logoloop ${scaleOnHover ? "logoloop--scale" : ""} ${className ?? ""}`}
      style={{ width, overflow: "hidden", ...style }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="logoloop__track"
        ref={trackRef}
        style={{ display: "flex", whiteSpace: "nowrap" }}
      >
        {logoLists}
      </div>
    </div>
  );
};

export const LogoLoop = memo(LogoLoopComponent);
LogoLoop.displayName = "LogoLoop";

export default LogoLoop;
