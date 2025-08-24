import React from "react";
import SunnyIcon from "./SunnyIcon";
import CloudyIcon from "./CloudyIcon";
import RainIcon from "./RainIcon";
import SnowIcon from "./SnowIcon";
import ThunderIcon from "./ThunderIcon";
import FogIcon from "./FogIcon";
import HailIcon from "./HailIcon";
import WindyIcon from "./WindyIcon";
import NightClearIcon from "./NightClearIcon";
import NightCloudyIcon from "./NightCloudyIcon";

export type WeatherType =
  | "sunny"
  | "cloudy"
  | "rain"
  | "snow"
  | "thunder"
  | "fog"
  | "hail"
  | "windy"
  | "night_clear"
  | "night_cloudy";

const iconMap = {
  sunny: SunnyIcon,
  cloudy: CloudyIcon,
  rain: RainIcon,
  snow: SnowIcon,
  thunder: ThunderIcon,
  fog: FogIcon,
  hail: HailIcon,
  windy: WindyIcon,
  night_clear: NightClearIcon,
  night_cloudy: NightCloudyIcon,
};

interface WeatherIconProps {
  type: WeatherType;
  className?: string;
  style?: React.CSSProperties;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ type, className, style }) => {
  const Icon = iconMap[type] || SunnyIcon;
  return <Icon className={className} style={style} />;
};

export default WeatherIcon;
