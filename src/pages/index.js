import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
	const url = typeof window !== 'undefined' ? window.location.href : '';
	const newtPrefix = 'http://web.newteditor.org/?URL=' + url;

	return (
		<div>
			<h1>SBGN File Listing:</h1>
			<p>Files retrieved from <a href='https://git-r3lab.uni.lu/covid/models/'>https://git-r3lab.uni.lu/covid/models/</a></p>
			<div>{ console.log("files: " + JSON.stringify(data)) }</div>
			<div>
				{ data.allFile.edges.map (({ node }) => (
					<div key={ node.relativePath }>
						{ node.name }:&nbsp;
						<a href={ node.relativePath }>SBGNML</a>&nbsp;
						<a href={ ( newtPrefix + node.relativePath ) }>Newt</a>
					</div>  
				)) }
			</div>
		</div>
	);
}

export const query = graphql`
    query {
        allFile(filter: { extension: {eq: "sbgn"} }) {
            edges {
                node {
					name
					extension
					dir
					absolutePath
					relativePath
					publicURL   
                }
            }
        }
    }
`
