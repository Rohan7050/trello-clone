
function FormActionButton({ actionModal, reset, action }) {
    return (
        <div className="px-2 md:px-5 py-5 flex justify-end">
            {(actionModal.redirect.hide || actionModal.reset.hide || actionModal.submit.hide) && <div></div>}
            {!actionModal.redirect.hide && <button onClick={action} className="basis-1/3 bastext-gray-900 bg-white hover:bg-gray-100 border border-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2" type={actionModal.redirect.action} >{actionModal.redirect.buttonText}</button>}
            {!actionModal.reset.hide && <button onClick={reset} className="basis-1/3 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2" type={actionModal.reset.action} >{actionModal.reset.buttonText}</button>}
            {!actionModal.submit.hide && <button className="basis-1/3 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200" type={actionModal.submit.action} >{actionModal.submit.buttonText}</button>}
        </div>
    );
}

export default FormActionButton;