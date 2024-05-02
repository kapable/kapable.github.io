import React from 'react';
import ScriptTag from 'react-script-tag';

const AdplusDisplayAdvertiser = ({ slotId }) => {
    const text = `window.googletag = window.googletag || {cmd: []}; googletag.cmd.push(function() {
        googletag.defineSlot(
            '/21849154601,23131258305/Ad.Plus-Native',
            ['fluid'],
            'Native-${slotId}')
        .addService(googletag.pubads()); googletag.enableServices(); googletag.display('Native-${slotId}'); });`
    return (
        <>
            <ScriptTag async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></ScriptTag>
            <div id={`Native-${slotId}`}><ScriptTag>{text}</ScriptTag></div>
        </>
    )
};

export default AdplusDisplayAdvertiser;