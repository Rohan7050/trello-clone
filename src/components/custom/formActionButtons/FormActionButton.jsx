import { Button } from "@/components/ui/button";

function FormActionButton({ actionModal }) {
    return (
        <div className="form-actions p-5 text-end grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {(actionModal.redirect.hide || actionModal.reset.hide || actionModal.submit.hide) && <div></div>}
            {!actionModal.redirect.hide && <Button type={actionModal.redirect.action} variant="outline">{actionModal.redirect.buttonText}</Button>}
            {!actionModal.reset.hide && <Button type={actionModal.reset.action} variant="outline">{actionModal.reset.buttonText}</Button>}
            {!actionModal.submit.hide && <Button type={actionModal.submit.action} variant="outline">{actionModal.submit.buttonText}</Button>}
        </div>
    );
}

export default FormActionButton;