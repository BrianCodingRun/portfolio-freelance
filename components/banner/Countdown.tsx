"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
  endDate: Date | string;
  onExpire?: () => void;
};

type RemainingTime = {
  expired: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getRemainingTime(endDate: Date | string): RemainingTime {
  const end = endDate instanceof Date ? endDate : new Date(endDate); // ← normalisation
  const difference = end.getTime() - Date.now();

  if (difference <= 0) {
    return { expired: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    expired: false,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export function Countdown({ endDate, onExpire }: CountdownProps) {
  const [remaining, setRemaining] = useState<RemainingTime>({
    expired: false,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const update = () => {
      const next = getRemainingTime(endDate);

      setRemaining(next);

      if (next.expired) {
        onExpire?.();
        return true;
      }

      return false;
    };

    // Mise à jour immédiate
    if (update()) return;

    const interval = setInterval(() => {
      if (update()) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate, onExpire]);

  return (
    <div className="hidden xl:flex flex-1 gap-4 items-center font-semibold uppercase">
      {/* DAYS */}
      <div className="flex flex-col items-center">
        <p className="text-xl leading-5">{remaining.days}</p>
        <span className="text-[10px] tracking-wide">Jours</span>
      </div>
      {/* SEPARATOR */}
      <div>:</div>
      {/* HOURS */}
      <div className="flex flex-col items-center text-xs">
        <p className="text-xl leading-5">
          {String(remaining.hours).padStart(2, "0")}
        </p>
        <span className="text-[10px] tracking-wide">Heures</span>
      </div>
      <div>:</div>
      {/* MINUTES */}
      <div className="flex flex-col items-center text-xs">
        <p className="text-xl leading-5">
          {String(remaining.minutes).padStart(2, "0")}
        </p>
        <span className="text-[10px] tracking-wide">Minutes</span>
      </div>
      <div>:</div>
      {/* SECONDS */}
      <div className="flex flex-col items-center text-xs">
        <p className="text-xl leading-5">
          {String(remaining.seconds).padStart(2, "0")}
        </p>
        <span className="text-[10px] tracking-wide">Secondes</span>
      </div>
    </div>
  );
}
