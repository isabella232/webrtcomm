/*
 * TeleStax, Open Source Cloud Communications  Copyright 2012. 
 * and individual contributors
 * by the @authors tag. See the copyright.txt in the distribution for a
 * full listing of individual contributors.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */

/*
 *  Implementation of the JAIN-SIP VersionField .
 *  @see  gov/nist/javax/sdp/fields/ProtoVersionField.java 
 *  @author Laurent STRULLU (laurent.strullu@orange.com)
 *  @version 1.0 
 */

function VersionField() {
    if(logger!=undefined) logger.debug("VersionField:VersionField()");
    this.classname="VersionField";
    this.fieldName=this.VERSION_FIELD;
    this.version=0;
}
 
VersionField.prototype = new SDPField();
VersionField.prototype.constructor=VersionField; 

VersionField.prototype.getVersion =function() {
    if(logger!=undefined) logger.debug("VersionField:getVersion()");
    return this.version;
}

/**
 * Set the protoVersion member
 */
VersionField.prototype.setVersion =function(version) {
    if(typeof version ==  'number')
    {
       if(logger!=undefined) logger.debug("VersionField:setVersion():version="+version);
       if(version >= 0) this.version = version;
       else throw new SdpException("VersionField.setVersion(): bad argument");
    }
    else throw new SdpException("VersionField.setVersion(): requires number type argument");  
}
   
/**
 *  Get the string encoded version of this object
 * @since v1.0
 */
VersionField.prototype.encode =function() {
    if(logger!=undefined) logger.debug("VersionField:encode()");
    return this.VERSION_FIELD + this.version + Separators.prototype.NEWLINE;
}

