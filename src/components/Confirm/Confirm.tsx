import React from 'react';

interface IPropsConfirm {
  id: number
  deleteConfirmButton (paramId: number): void
  deleteNo (): void
}

const EditForm: React.FunctionComponent<IPropsConfirm> = (props) => {

  return (
    <div className="confirm animate__animated animate__fadeInLeft">
      <div>Are you sure you want to delete this item?</div>
      <div>
        <span>
          <button onClick={() => props.deleteConfirmButton(props.id)} className="btn-small">Yes</button>
        </span>&ensp;&ensp;&ensp;&ensp;&ensp;
        <span>
        <button onClick={() => props.deleteNo()} className="btn-small">No</button>
        </span>
        <br />
      </div>
    </div>
  )
}

export default EditForm;
