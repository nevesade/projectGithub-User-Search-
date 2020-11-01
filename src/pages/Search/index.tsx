/* eslint-disable jsx-a11y/anchor-is-valid */
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { userResponse } from '../../core/types/UserInfos';
import { makeRequest } from '../../core/utils/request';
import ImageLoader from './Components/Loaders/ImageLoader';
import InfoLoader from './Components/Loaders/InfoLoader';
import './styles.scss';





const SearchInfos = () => {

    const [name, setName] = useState('');

    const [userResponse, setUserResponse] = useState<userResponse>();


    const [isLoading, setIsLoading] = useState(false);

    const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setName(event.target.value);

    }

    const [showSearch, setshowSearch] = useState(false)

    const onClick = () => setshowSearch(true)


    const ImageUser = () => (


        <div>
            <img src={userResponse?.avatar_url} alt="imagem do utilizador" className="image-user" />


            <div className="btn-view-profile">
                <a href={userResponse?.html_url} className="btn-profile "  >
                    Ver  perfil

                </a>

            </div>


        </div>

    )



    const UserInfosSearch = () => (

        <div className="details-infos-user ">


            <div className=" row View-repositotory-follow">
                <div className="repos-follow">

                    <div className=" alert-repos" >
                        <div className="alert-infos-repos">
                            Repositórios públicos: {userResponse?.public_repos}
                        </div>

                    </div>

                    <div className=" alert-followers" >
                        <div className="alert-infos-followers">
                            Seguidores: {userResponse?.followers}
                        </div>

                    </div>

                    <div className=" alert-following" >
                        <div className="alert-infos-following">
                            Seguindo: {userResponse?.following}
                        </div>

                    </div>

                </div>

            </div>

            <div className="view-search-informations">

                <h4>Informações</h4>

                <div className=" informations">

                    <div className="alert-company" >
                        <div className=" alert-informations-company">
                            <span className="span-company" >Empresa:    </span>   {userResponse?.company}
                        </div>

                    </div>

                    <div className="alert-blog" >
                        <div className=" alert-informations-blog">
                            <span className="span-blog">Website/Blog:</span> {userResponse?.blog}
                        </div>

                    </div>

                    <div className="alert-location" >
                        <div className=" alert-informations-location">
                            <span className="span-location">Localidade:</span> {userResponse?.location}
                        </div>

                    </div>

                    <div className="alert-created_at" >
                        <div className=" alert-informations-created_at">
                            <span className="span-created_at">Membro desde:</span> {dayjs(userResponse?.created_at).format("DD/MM/YYYY")}
                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        //iniciar loarder
        setIsLoading(true);
        makeRequest({ url: `/${name}` })
            .then(response => setUserResponse(response.data))
            .finally(() => {

                //finalizar o loader

                setIsLoading(false);

            })
    }

    return (

        <form onSubmit={handleSubmit} >

            <div className="search container">
                <div className="row search-content ">
                    <div className="col-12 ">
                        <h4 className="text-title">
                            Encontre um perfil Github
                        </h4>

                        <div className="input-search  ">
                            <input
                                value={name}
                                name="name"
                                type="text"
                                placeholder="Usuário Github"
                                className="form-control"
                                onChange={handleOnchange}

                            ></input>
                        </div>


                        <button className="btn btn-primary btn-search " onClick={onClick} >
                            Encontrar
                        </button>

                   </div>

                </div>

           </div>



            <div className={`details-users container  ${showSearch ? 'showDetails-Users' : ''}`} >

                {isLoading ? <ImageLoader/> : showSearch ? <ImageUser /> : null}

                {isLoading ? <InfoLoader /> : showSearch ? <UserInfosSearch /> : null}
            </div>


        </form>

    );

}

export default SearchInfos;


