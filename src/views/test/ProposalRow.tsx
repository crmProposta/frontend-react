import React from "react";
import { Card } from "react-bootstrap";
import Proposal from './Proposta/index';
import Header from './Proposta/components/Header';

export default function ProposalRow() {
    return <Proposal id={"idHere"}>

        <Proposal.Header name={"name"} cpf={"000.000.000-00"} status={"AGUARDANDO ACEITE"}
            financiedAmount={"0000.00"}
            unitCommision={"000.00"}
            onClickEdit={() => ("e")}
            onClickRemove={() => ("e")}
            />
        <Proposal.Body
           id={"00001"}
           bank={"Bradesco"}
           promoter={"SAFRA"}
           saleSource={"Whatsapp"}
           proposalNumber={"92193283"}
           proposalType={"Antecipação saque"}
        
        />
        <Proposal.Footer 
            registration={"02/02/2020 15:30"}
            seller={"account6"}
            chunk={"Bragança"}
            lastModification={"02/02/20 12:30"}
        />
        <div className="collapse p-0" id="collapsefundoCinza<?php echo $k; ?>">
            <div className="fundoCinza px-2" style={{ marginLeft: "10px", marginRight: "40px" }}>
                <div className="row test">
                    <div className="col-6">
                        <div className="card" style={{ wordWrap: "normal" }}>
                            <div className="card-header"> <br />
                                Informações complementares
                            </div>
                            <div className="card-body">
                                <div className="row pt-1">
                                    <div className="col">
                                        <div className="row ">
                                        </div>
                                        <div className="row pb-1">
                                            <div className="col-3">
                                                <p className="mb-0 font-weight-bold text-dark">
                                                    Vendedor atual
                                                </p>
                                            </div>
                                            <div className="col-9 text-right">
                                                <p className="mb-0 text-dark">
                                                    Vendedor atual</p>
                                            </div>
                                        </div>
                                        <div className="row pb-1">
                                            <div className="col-5">
                                                <p className="mb-0 font-weight-bold text-dark">
                                                    Cadastrado por</p>
                                            </div>
                                            <div className="col-7 text-right">
                                                <p className="mb-0 text-dark">
                                                    Cadastrado por
                                                </p>
                                            </div>
                                        </div>
                                        <div className="kt-separator kt-separator--border-dashed kt-separator--space-sm"></div>
                                        <div className="row pb-1">
                                            <div className="col-6">
                                                <p className="mb-0 font-weight-bold text-dark">
                                                    Origem da venda</p>
                                            </div>
                                            <div className="col-6 text-right">
                                                <p className="mb-0 text-dark">
                                                    Origem venda
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row pb-1">
                                            <div className="col-8">
                                                <p className="mb-0 font-weight-bold text-dark">
                                                    Valor do financiado</p>
                                            </div>
                                            <div className="col-4 text-right">
                                                <p className="mb-0 text-dark">R$
                                                    Valor financiado
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col" style={{ borderRight: "1px solid rgb(235, 237, 242)" }}>
                                        <div className="col-12 text-center">
                                            <p className="mb-0 font-weight-bold text-dark">

                                            </p>
                                        </div>
                                        <div className="kt-separator kt-separator--border-dashed kt-separator--space-sm"></div>
                                        <div className="row pb-1">
                                            <div className="col-6">
                                                <p className="mb-0 font-weight-bold text-dark ">
                                                    Cadastrado em</p>
                                            </div>
                                            <div className="col-6 text-right">
                                                <p className="mb-0 text-dark">
                                                    Cadastrado em: data
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card" style={{ wordWrap: "normal" }}>
                            <div className="card-header"> <br />
                                Tabela: <span className="kt-font-primary">TABELA SAFRA FGTS</span>
                            </div>

                            <div className="card-body">
                                <div className="row pt-1">
                                    <div className="col" style={{ borderRight: "1px solid rgb(235, 237, 242)" }}>
                                        <div className="row pb-1">
                                            <div className="col-3">
                                                <p className="mb-0 font-weight-bold text-dark">
                                                    Banco
                                                </p>
                                            </div>
                                            <div className="col-9 text-right">
                                                <p className="mb-0 text-dark">
                                                    Banco
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row pb-1">
                                            <div className="col-3">
                                                <p className="mb-0 font-weight-bold text-dark ">
                                                    Promotora</p>
                                            </div>
                                            <div className="col-9 text-right">
                                                <p className="mb-0 text-dark">
                                                    Promotora
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col" style={{ borderRight: "1px solid rgb(235, 237, 242)" }}>
                                        <div className="row pb-1">
                                            <div className="col-3">
                                                <p className="mb-0 font-weight-bold text-dark">
                                                    Prazo
                                                </p>
                                            </div>
                                            <div className="col-9 text-right">
                                                <p className="mb-0 text-dark">
                                                    Prazo
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row pb-1">
                                            <div className="col-7">
                                                <p className="mb-0 font-weight-bold text-dark">
                                                    Multiplicador</p>
                                            </div>
                                            <div className="col-5 text-right">
                                                <p className="mb-0 text-dark">
                                                    Multiplicador %
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row pb-1">
                                            <div className="col-7">
                                                <p className="mb-0 font-weight-bold text-dark">
                                                    valor do multiplicador</p>
                                            </div>
                                            <div className="col-5 text-right">
                                                <p className="mb-0 text-dark">
                                                    Valor do multiplicador
                                                </p>
                                            </div>
                                        </div>
                                        <div className="kt-separator kt-separator--border-dashed kt-separator--space-sm"></div>
                                        <div className="kt-separator kt-separator--border-dashed kt-separator--space-sm"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </Proposal>
}