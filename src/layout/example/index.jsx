import React, { useState } from "react";
import { motion } from 'framer-motion'
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { json } from "@codemirror/lang-json";
import { githubDark } from '@uiw/codemirror-theme-github'
import ViewPort from "../../components/utils/ViewPort";

export default function Example() {
    const [inView, setInView] = useState(false)

    const jsonSample = ({
        "glossary": {
            "title": "example glossary",
            "GlossDiv": {
                "title": "S",
                "GlossEntry": {
                    "ID": "SGML",
                    "SortAs": "SGML",
                    "GlossTerm": "Standard \\r\\n Generalized Markup Language",
                    "Acronym": "SGML",
                    "Abbrev": "ISO 8879:1986",
                    "GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
                        "GlossSeeAlso": ["GML", "XML"]
                    }
                }
            }
        }
    })

    const grabWizardSample = [
        `import { grabValue, grabPath } from "grab-wizard";  `,
        ``,
        `grabValue(jsonData, "Acronym");`,
        `//-> "SGML"`,
        `grabValue(jsonData, "GlossEntry.GlossSeeAlso[1]");`,
        `//-> "XML"\n`,
        `// You can find JSON paths`,
        `grabPath(jsonData, "Acronym");`,
        `//-> .glossary.GlossDiv.GlossEntry.Acronym`,
        `grabPath(jsonData, "XML");`,
        `//-> .glossary.GlossDiv.GlossEntry.GlossSeeAlso[1]`,
    ]

    const originGrab = [
        `// Normally you should proceed like this`,
        `jsonData.glossary.GlossDiv.GlossEntry.Acronym`,
        `//-> "SGML"`,
        `jsonData.glossary.GlossDiv.GlossEntry.GlossDef.GlossSeeAlso[1]`,
        `//-> "XML"`
    ]

    const codeMirrorSections = [
        <CodeMirror
            key={"grabWizardMirror"}
            value={grabWizardSample.join("\n")}
            theme={githubDark}
            readOnly
            className="text-xs sm:text-sm md:absolute bottom-2 right-0  drop-shadow-xl z-10 shadow-md shadow-burntSienna w-full md:w-max rounded-lg md:text-base "
            extensions={[javascript({ jsx: true })]}
        />,
        <CodeMirror
            key={"originGrabMirror"}
            value={originGrab.join("\n")}
            theme={githubDark}
            readOnly
            lineWrapping={true}
            className="text-xs sm:text-sm md:absolute top-2 right-0  drop-shadow-xl z-10 shadow-md shadow-burntSienna w-full md:w-max rounded-lg md:text-base"
            extensions={[javascript({ jsx: true })]}
        />

    ]

    const getUniqueKey = () => inView + Math.random() * 1000

    return (
        <ViewPort getViewStatus={setInView} delay={300} className={"flex scroll-w flex-col justify-between items-center relative gap-1 w-full h-full overflow-hidden box-border overf low-y-auto md:justify-end md:flex-row-reverse indent-0 "}>
           
           
           
           
            




            <motion.div
                key={getUniqueKey()}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: inView ? 1 : 0 }}
                transition={{ duration: .7, delay: .3 }}
                className="w-full"
            >
            <CodeMirror
                key={"jsonMirror"}
                value={`jsonData\n${JSON.stringify(jsonSample, null, 2)}`}
                theme="dark"
                title="json data"
                readOnly
                mode="application/json"
                className=" text-xs sm:text-sm w-full rounded-lg shadow-md shadow-burntSienna xl:w-max md:text-base"
                extensions={[json()]}
            />
            </motion.div>


            <motion.div
                key={getUniqueKey()}
                initial={{ right: -30, opacity: 0 }}
                animate={{ right: 0, opacity: inView ? 1 : 0 }}
                transition={{ duration: .7, delay: .3 }}
                className="md:absolute top-2 right-0 z-10 w-full md:w-max"
            >
                <CodeMirror
                    key={"originGrabMirror"}
                    value={originGrab.join("\n")}
                    theme={githubDark}
                    readOnly
                    lineWrapping={true}
                    className="text-xs sm:text-sm   drop-shadow-xl shadow-md shadow-burntSienna w-full md:w-max  rounded-lg md:text-base"
                    extensions={[javascript({ jsx: true })]}
                />
            </motion.div>


<motion.div
                key={getUniqueKey()}
                initial={{ right: -30, opacity: 0 }}
                animate={{ right: 0, opacity: inView ? 1 : 0 }}
                transition={{ duration: .7, delay: .3 }}
                className="md:absolute bottom-2 right-0 z-10 w-full md:w-max"
            >
                <CodeMirror
                    key={"grabWizardMirror"}
                    value={grabWizardSample.join("\n")}
                    theme={githubDark}
                    readOnly
                    className="text-xs sm:text-sm drop-shadow-xl shadow-md shadow-burntSienna w-full md:w-max rounded-lg md:text-base "
                    extensions={[javascript({ jsx: true })]}
                />
            </motion.div>
        </ViewPort>
    );
}