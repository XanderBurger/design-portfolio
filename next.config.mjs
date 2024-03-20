/** @type {import('next').NextConfig} */
import { withNextVideo } from "next-video/process";

const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{loader: '@svgr/webpack', options: {icon: true}}]
        },
        )
        return config
    }
};

export default withNextVideo(nextConfig);