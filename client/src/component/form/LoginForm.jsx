import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { getRouteUser } from '../../helpers/navigateRoute';

function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const { user, login, isAuthenticated, errors: loginErrors } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    await login(data);
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate(getRouteUser(user, '/perfil-socio/noticias'));
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <>
      <div className="crancy-wc__heading">
        <h3 className="crancy-wc__form-title crancy-wc__form-title__one">
          Ingresar en su cuenta
        </h3>
      </div>
      <form className="crancy-wc__form-main" onSubmit={onSubmit}>
        {/* <!-- Avisos --> */}
        {loginErrors.length > 0 && (
          <div className="form-group">
            <div className="crancy-wc__button">
              {loginErrors.map((error, i) => (
                <div className="crancy-color__plate5" key={i}>
                  {error.message}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* <!-- Form Group --> */}
        <div className="form-group">
          <div className="form-group__input">
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  className="crancy-wc__form-input"
                  id="username"
                  type="email"
                  name="username"
                  placeholder="admin@mail.com"
                  required="required"
                />
              )}
            />
            {errors.email && (
              <p className="crancy-color__plate5">El email es necesario</p>
            )}
          </div>
        </div>
        {/* <!-- Form Group --> */}
        <div className="form-group">
          <div className="form-group__input">
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    className="crancy-wc__form-input"
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    id="password"
                    type="password"
                    name="password"
                    required="required"
                  />
                  <span className="crancy-wc__toggle">
                    <i className="fas fa-eye" id="toggle-icon"></i>
                  </span>
                </>
              )}
            />
            {errors.password && (
              <p color="danger">La contrasela es necesario</p>
            )}
          </div>
        </div>
        {/* <!-- Form Group --> */}
        <div className="form-group form-mg-top25">
          <div className="crancy-wc__button">
            <button className="ntfmax-wc__btn" type="submit">
              Iniciar sesión
            </button>
          </div>
        </div>
        {/* <!-- Form Group --> */}
      </form>
    </>
  );
}

export default LoginForm;
