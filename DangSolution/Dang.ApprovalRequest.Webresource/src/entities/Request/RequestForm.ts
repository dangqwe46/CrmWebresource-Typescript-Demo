import { dang_approvalrequestAttributes } from "../../dataverse-gen/entities/dang_approvalrequest";

export class RequestForm {
  static async On_Load(executionContext: Xrm.Events.EventContext) {
    const formContext = executionContext.getFormContext();
    const name = formContext.getAttribute<Xrm.Attributes.StringAttribute>(
      dang_approvalrequestAttributes.dang_Name
    );
    Xrm.Navigation.openAlertDialog({
      text: name?.getValue() ?? "default",
      title: "Onload dialog",
      confirmButtonLabel: "Oke",
    });
  }
}
