import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default ({ data }) => {
	//const url = typeof window !== 'undefined' ? window.location.href : '';
	const url = 'https://cannin.github.io/covid19-sbgn/';
	const newtPrefix = 'http://web.newteditor.org/?URL=' + url;

	return (
		<div>
			<Helmet title="covid19-sbgn" defer={false} />
			<h1>SBGN File Listing:</h1>
			<p>COVID19 maps retrieved from <a href='https://git-r3lab.uni.lu/covid/models/' target="_blank" rel="noopener noreferrer">https://git-r3lab.uni.lu/covid/models/</a> 
			  and converted using <a href='https://github.com/sbgn/cd2sbgnml' target="_blank" rel="noopener noreferrer">cd2sbgnml</a>.</p>
              <p><a href='https://github.com/cannin/covid19-sbgn' target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
			<div>{ console.log("files: " + JSON.stringify(data)) }</div>
			<div>
				{ data.allFile.edges.map (({ node }) => (
					<div key={ node.relativePath }>
						{ node.name }:&nbsp;
						<a href={ node.relativePath } target="_blank" rel="noopener noreferrer">SBGNML</a>&nbsp;
                        <a href={ node.name + '_simplified.sif' } target="_blank" rel="noopener noreferrer">SIF</a>&nbsp;
						<a href={ ( newtPrefix + node.relativePath ) } target="_blank" rel="noopener noreferrer">Newt</a>
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
