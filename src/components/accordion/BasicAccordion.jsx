import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const BasicAccordion = () => {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Celular</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Celulares são produtos altamente populares, com bilhões
                        de vendas anuais globalmente, oferecendo comunicação,
                        entretenimento e acesso à informação em um dispositivo
                        portátil indispensável na vida moderna.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Notebook</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Notebooks são dispositivos portáteis fundamentais para
                        trabalho, estudo e entretenimento, com milhões de
                        unidades vendidas anualmente em todo o mundo.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Computador</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Computadores são fundamentais para trabalho e
                        entretenimento, com milhões de unidades vendidas
                        anualmente em todo o mundo.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default BasicAccordion;
