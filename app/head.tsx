import React from "react";
import NextHead from "next/head";

export const Head = () => {
    return (
        <NextHead>
            <title>Name-it</title>
            <meta key="title" content="Name-it" property="og:title" />
            <meta content="A website helps you naming variables, functions and more" property="og:description" />
            <meta content="A website helps you naming variables, functions and more" name="description" />
            <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            <meta
                key="viewport"
                content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                name="viewport"
            />
            <meta name="robots" content="noindex,nofollow" />
            <meta charSet="UTF-8" />
            <link href="/favicon.ico" rel="icon" />
        </NextHead>
    );
};
