

import React, { Component } from 'react';
const { Image } = require('react-native-svg');


export const ImageRender = ({ x, y, i, options }) => (

    <Image
        x={x - (options.sizeIconReward ? options.sizeIconReward : 30) / 2}
        y={y - (options.sizeIconReward ? options.sizeIconReward : 30) / 2 }
        width={options.sizeIconReward ? options.sizeIconReward : 30 }
        height={options.sizeIconReward ? options.sizeIconReward : 30}
        href={options.iconRewards ? options.iconRewards[i] : require('../assets/images/knob.png')
        }
        style={{ width: 30, height: 30 }}
    />

);