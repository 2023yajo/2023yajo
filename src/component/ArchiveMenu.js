import React from 'react';
import { Link } from 'react-router-dom';
import './css/archive.css'

const ArchiveMenu = () => {
    return (
        <>
            <div className='archive-menu'>
                <Link className='achive-link' to={'/person/1'}>              1          고예진               </Link>
                <br /> <Link className='achive-link' to={'/person/2'}>          2      김나영                </Link>
                <br /> <Link className='achive-link' to={'/person/3'}>          3      김빈                  </Link>
                <br /> <Link className='achive-link' to={'/person/4'}>          4     김세하                 </Link>
                <br /> <Link className='achive-link' to={'/person/5'}>          5      김은서                </Link>
                <br /> <Link className='achive-link' to={'/person/6'}>          6     김응준                 </Link>
                <br /> <Link className='achive-link' to={'/person/7'}>          7        김준우              </Link>
                <br /> <Link className='achive-link' to={'/person/8'}>          8     김준형                 </Link>
                <br /> <Link className='achive-link' to={'/person/9'}>          9        김채연              </Link>
                <br /> <Link className='achive-link' to={'/person/10'}>         10    남가현                 </Link>
                <br /> <Link className='achive-link' to={'/person/11'}>          11    류재헌                </Link>
                <br /> <Link className='achive-link' to={'/person/12'}>         12           백자연          </Link>
                <br /> <Link className='achive-link' to={'/person/13'}>          13     서성우               </Link>
                <br /> <Link className='achive-link' to={'/person/14'}>          14           서지수         </Link>
                <br /> <Link className='achive-link' to={'/person/15'}>          15                 오유진   </Link>
                <br /> <Link className='achive-link' to={'/person/16'}>16  이시환                            </Link>
                <br /> <Link className='achive-link' to={'/person/17'}> 17       이정주                      </Link>
                <br /> <Link className='achive-link' to={'/person/18'}>  18            임소윤                </Link>
                <br /> <Link className='achive-link' to={'/person/19'}>   19              임지민             </Link>
                <br /> <Link className='achive-link' to={'/person/20'}>    20                장도휘          </Link>
                <br /> <Link className='achive-link' to={'/person/21'}>     21          전호정               </Link>
                <br /> <Link className='achive-link' to={'/person/22'}>      22               정서연         </Link>
                <br /> <Link className='achive-link' to={'/person/23'}>       23                  조윤정     </Link>
                <br /> <Link className='achive-link' to={'/person/24'}>        24 조은채                     </Link>
                <br /> <Link className='achive-link' to={'/person/25'}>         25     조재형                </Link>
                <br /> <Link className='achive-link' to={'/person/26'}>         26         최은지            </Link>
                <br /> <Link className='achive-link' to={'/person/27'}>          27   한지원                 </Link>
                <br /> <Link className='achive-link' to={'/person/28'}>        28        한지윤              </Link>
                <br /> <Link className='achive-link' to={'/person/29'}>         29        황서현             </Link>
                <br /> <Link className='achive-link' to={'/person/30'}>       30           DI JINGXIAN       </Link>
            </div>
        </>
    );
};

export default ArchiveMenu;