import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import RichTextEditor from "../stories/TextEditor/RichTextEditor";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import { ConfigProvider, Radio, Button, Typography } from "antd";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";
import "antd/dist/antd.css";
import * as Yup from "yup";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";
import "antd/dist/antd.css";
import { commentActions, alertActions } from "../../_actions";
import PropTypes from "prop-types";
import { IComment } from "../../_types";

function EditCommentDashboard(props) {
  const dispatch = useDispatch();

  const currentComment = useSelector((state) => state.comment.currentComment);
  const loaded = useSelector((state) => state.comment.loaded);
  const alertType = useSelector((state) => state.alert.type);
  const isUpdatedSuccess = alertType === "alert-success";

  const loadCurrentComment = async () => {
    await dispatch(commentActions.getCommentById(props.match.params.id));
  };

  useEffect(() => {
    dispatch(alertActions.clear());
    loadCurrentComment();
  }, []);

  return (
    <section>
      <h1 className="title">Edit comment</h1>
      {loaded ? (
        <Formik
          initialValues={{
            body: currentComment.body,
          }}
          validationSchema={Yup.object().shape({
            body: Yup.string().required("body required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              dispatch(
                commentActions.updateComment(
                  {
                    body: values.body,
                    storyId: currentComment.storyResponse.id,
                  },
                  currentComment.id
                )
              );
              setSubmitting(false);
            }, 300);
          }}
        >
          {({
            isSubmitting,
            isValid,
            setFieldValue,
            values,
            handleChange,
            handleBlur,
            touched,
            errors,
          }) => {
            return (
              <FormikForm>
                <div className="form-group">
                  <label htmlFor="body">Body</label>
                  <Field
                    name="body"
                    type="text"
                    className={
                      "input" +
                      (errors.body && touched.body ? " is-danger" : "")
                    }
                  />
                  <ErrorMessage
                    name="body"
                    component="div"
                    className="help is-danger"
                  />
                </div>
                <div
                  style={{
                    paddingBottom: 24,
                    marginTop: 16,
                  }}
                >
                  <div className="level">
                    <div className="level-item level-center">
                      <button
                        className="button is-info is-medium"
                        htmlType="submit"
                        type="submit"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </FormikForm>
            );
          }}
        </Formik>
      ) : (
        "Comment not found"
      )}
      {isUpdatedSuccess ? (
        <div className="notification is-info">Comment Updated Successfully</div>
      ) : null}
    </section>
  );
}

EditCommentDashboard.propTypes = {
  currentComment: PropTypes.instanceOf(IComment),
  loaded: PropTypes.bool,
  alertType: PropTypes.string,
};

EditCommentDashboard.defaultProps = {
  currentComment: undefined,
  loaded: false,
  alertType: "",
};

export default EditCommentDashboard;
